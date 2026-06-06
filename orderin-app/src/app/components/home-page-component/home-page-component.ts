import { Component, DestroyRef, inject, OnInit, signal, viewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CarouselSectionComponent } from '@app/components/shared/carousel-section-component/carousel-section-component';
import { CategoryCardComponent } from '@app/components/shared/category-card-component/category-card-component';
import { IPopularCategory } from '@app/models/category-models/category-models';
import { CategoryService } from '@app/services/category-service/category-service';

@Component({
  selector: 'app-home-page-component',
  imports: [
    CarouselSectionComponent,
    CategoryCardComponent
  ],
  templateUrl: './home-page-component.html',
  styleUrl: './home-page-component.scss',
})
export class HomePageComponent implements OnInit {
  readonly categoryCardComponentInstance = viewChild(CategoryCardComponent);
  readonly popularCategories = signal<IPopularCategory[]>([]);

  readonly #categoryService = inject(CategoryService);
  readonly #destroyRef = inject(DestroyRef);

  ngOnInit(){
    this.#categoryService.getPopularCategories().pipe(
      takeUntilDestroyed(this.#destroyRef)
    ).subscribe((response: IPopularCategory[])=>{
      this.popularCategories.set(response);
    });
  }
}
