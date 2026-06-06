import { Component, TemplateRef, viewChild } from '@angular/core';

@Component({
  selector: 'app-category-card-component',
  imports: [],
  templateUrl: './category-card-component.html',
  styleUrl: './category-card-component.scss',
})
export class CategoryCardComponent {
  readonly cardTemplate = viewChild<TemplateRef<any>>('cardTemplate');
}
