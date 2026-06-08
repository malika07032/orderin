import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { LocationStatusComponent } from '../location-status-component/location-status-component';

@Component({
  selector: 'app-top-info-component',
  imports: [
    MatIconModule,
    LocationStatusComponent
  ],
  templateUrl: './top-info-component.html',
  styleUrl: './top-info-component.scss',
})
export class TopInfoComponent {

}
