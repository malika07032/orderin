import { Routes } from '@angular/router';
import { HomePageComponent } from '@app/components/home-page-component/home-page-component';
import { RestaurantsPageComponent } from '@app/components/restaurants-page-component/restaurants-page-component';
import { APP_ROUTES_ENUM } from '@app/models/app-route-models/app-route-model';

export const routes: Routes = [
    {
        path: APP_ROUTES_ENUM.HOME,
        component: HomePageComponent
    },
    {
        path: APP_ROUTES_ENUM.RESTAURANTS,
        component: RestaurantsPageComponent
    }
];
