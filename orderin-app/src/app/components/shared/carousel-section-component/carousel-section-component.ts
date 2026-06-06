import { NgTemplateOutlet } from '@angular/common';
import { Component, input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-carousel-section-component',
  imports: [
    NgTemplateOutlet
  ],
  templateUrl: './carousel-section-component.html',
  styleUrl: './carousel-section-component.scss',
})
export class CarouselSectionComponent {
  readonly sectionTitle = input.required<string>();
  readonly items = input.required<any[]>();
  readonly customItemTemplate = input.required<TemplateRef<any>>();
}
