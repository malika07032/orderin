import { Component, TemplateRef, viewChild } from '@angular/core';
import { CarouselSectionComponent, ICarouselItem } from '@app/components/shared/carousel-section-component/carousel-section-component';
import { CategoryCardComponent } from '@app/components/shared/category-card-component/category-card-component';

@Component({
  selector: 'app-home-page-component',
  imports: [
    CarouselSectionComponent,
    CategoryCardComponent
  ],
  templateUrl: './home-page-component.html',
  styleUrl: './home-page-component.scss',
})
export class HomePageComponent {
  readonly items: ICarouselItem[] = [
    {title: '1', image: 'blablabla1'},
    {title: '2', image: 'blablabla2'},
    {title: '3', image: 'blablabla3'},
    {title: '4', image: 'blablabla4'}
  ];

  readonly categoryCardComponentInstance = viewChild(CategoryCardComponent);
}
