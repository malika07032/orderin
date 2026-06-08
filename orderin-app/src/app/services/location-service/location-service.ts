import { Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';

export interface IUserLocation {
  latitude: number;
  longitude: number;
  address?: string;
}

export enum GeolocationPermissionEnum {
  PROMPT = 'prompt',
  DENIED = 'denied',
  GRANTED = 'granted'
}

export const USER_LOCATION_KEY = 'usrloc';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  readonly location = toSignal(
    this.getCurrentLocation(),
    {initialValue: null}
  )
  readonly geolocationStatus = toSignal(
    this.watchGeolocationPermission(), 
    { initialValue: GeolocationPermissionEnum.PROMPT }
  );

  watchGeolocationPermission(): Observable<PermissionState> {
    return new Observable<PermissionState>((subscriber) => {
      let permissionStatus: PermissionStatus | null = null;

      navigator.permissions.query({ name: 'geolocation' })
        .then((status) => {
          permissionStatus = status;
          subscriber.next(status.state);

          status.onchange = () => {
            subscriber.next(status.state);
          };
        })
        .catch((error) => {
          subscriber.error(error);
        });

      return () => {
        if (permissionStatus) {
          permissionStatus.onchange = null;
        }
      };
    });
  }

  /* getCurrentLocation(): void  {
    navigator.geolocation.getCurrentPosition(
      (position)=>{
        this.location.set({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      },
      (error) => {
        console.error('Error getting geolocation coordinates:', error);
      }
    )
  } */

  getCurrentLocation(): Observable<IUserLocation> {
    return new Observable<IUserLocation>((subscriber)=>{
      navigator.geolocation.getCurrentPosition(
        (position)=>{
          subscriber.next(
            {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            }
          );
          subscriber.complete();
        },
        (error)=>{
          subscriber.error(error)
        }
      );
    })
  }
}
