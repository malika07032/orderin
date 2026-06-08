import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { LocationService } from '@app/services/location-service/location-service';

@Component({
  selector: 'app-location-status-component',
  imports: [
    MatIconModule,
    JsonPipe
  ],
  templateUrl: './location-status-component.html',
  styleUrl: './location-status-component.scss',
})
export class LocationStatusComponent {
  readonly #locationService = inject(LocationService);

  readonly geoPermissionStatus = this.#locationService.geolocationStatus;
  readonly location = this.#locationService.location;

  /* getCurrentLocation(): void {
    this.#locationService.getCurrentLocation();
  } */
}
