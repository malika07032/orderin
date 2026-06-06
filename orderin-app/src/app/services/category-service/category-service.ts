import { Injectable } from '@angular/core';
import { IPopularCategory, mockPopularCategories } from '@app/models/category-models/category-models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  getPopularCategories(): Observable<IPopularCategory[]> {
    const mockData = mockPopularCategories;
    return of(mockData).pipe(
      //delay(3000)
    );
  }
}
