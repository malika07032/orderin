import { Component, input, TemplateRef, viewChild } from '@angular/core';

@Component({
  selector: 'app-category-card-component',
  imports: [],
  templateUrl: './category-card-component.html',
  styleUrl: './category-card-component.scss',
})
export class CategoryCardComponent {
  //readonly url = input.required<string>();
  //readonly text = input.required<string>();

  readonly cardTemplate = viewChild<TemplateRef<any>>('cardTemplate');
}
