export interface ICategory {
  id: string;
  name: string;
  imageUrl: string;
}

export interface IPopularCategory extends ICategory {
  restaurantCount: number;
  popularityScore: number;
}

export const mockPopularCategories: IPopularCategory[] = [
  {
    id: '1',
    name: 'Burgers & Fast food',
    imageUrl: 'assets/images/home-page-categories/fast-food.png',
    restaurantCount: 21,
    popularityScore: 98,
  },
  {
    id: '2',
    name: 'Salads',
    imageUrl: 'assets/images/home-page-categories/salads.png',
    restaurantCount: 32,
    popularityScore: 98,
  },
  {
    id: '3',
    name: 'Pasta & Casuals',
    imageUrl: 'assets/images/home-page-categories/pasta.png',
    restaurantCount: 4,
    popularityScore: 98,
  },
  {
    id: '4',
    name: 'Pizza',
    imageUrl: 'assets/images/home-page-categories/pizza.png',
    restaurantCount: 32,
    popularityScore: 98,
  },
  {
    id: '5',
    name: 'Breakfast',
    imageUrl: 'assets/images/home-page-categories/breakfast.png',
    restaurantCount: 4,
    popularityScore: 98,
  },
  {
    id: '6',
    name: 'Soups',
    imageUrl: 'assets/images/home-page-categories/soups.png',
    restaurantCount: 32,
    popularityScore: 98,
  },
];
