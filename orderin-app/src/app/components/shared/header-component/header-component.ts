import { Component } from '@angular/core';
import { TopInfoComponent } from '@app/components/shared/top-info-component/top-info-component';
import { NavBarComponent } from '@app/components/shared/navigation-bar-component/navigation-bar-component';

@Component({
  selector: 'app-header-component',
  imports: [
    TopInfoComponent,
    NavBarComponent
  ],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss',
})
export class HeaderComponent {
  
}
