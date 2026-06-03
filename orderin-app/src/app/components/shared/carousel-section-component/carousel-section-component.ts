import { NgTemplateOutlet } from '@angular/common';
import { Component, input, TemplateRef } from '@angular/core';

export interface ICarouselItem {
  title: string,
  image: string,
  text?: string
}

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
  readonly items = input.required<ICarouselItem[]>();

  readonly customItemTemplate = input.required<TemplateRef<any>>();
}
