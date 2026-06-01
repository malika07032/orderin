import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatToolbar } from '@angular/material/toolbar';
import { NavigationEnd, Router } from '@angular/router';
import { ButtonComponent, ColorTypeEnum } from '@app/core/components/button-component/button-component';
import { APP_ROUTES_ENUM } from '@app/models/app-route-models/app-route-model';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-navbar-component',
  imports: [
    MatToolbar,
    ButtonComponent
  ],
  templateUrl: './navigation-bar-component.html',
  styleUrl: './navigation-bar-component.scss',
})
export class NavBarComponent {
  readonly colorTypes = ColorTypeEnum;
  readonly appRoutes = APP_ROUTES_ENUM;

  readonly #router = inject(Router);

  readonly currentRoute = toSignal(
    this.#router.events.pipe(
      filter((event)=> event instanceof NavigationEnd),
      map((event)=> event.urlAfterRedirects)
    ),
    {initialValue: '/'}
  );

  readonly isHomeActive = computed(()=> this.currentRoute() === `/${this.appRoutes.HOME}`);
  readonly isRestaurantActive = computed(()=> this.currentRoute() === `/${this.appRoutes.RESTAURANTS}`);

  navigate(path: string): void {
    const route = ['/'];
    if (path) {
      route.push(path);
    }
    this.#router.navigate(route);
  }
}
