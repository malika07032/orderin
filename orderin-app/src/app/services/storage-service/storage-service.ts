import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  readonly #storage = localStorage;

  getItem<T>(key: string): T | null {
    try {
      const value = this.#storage.getItem(key);
      if (value === null) {
        return null;
      }
      return JSON.parse(value);
    } catch (error) {
      console.error(`StorageService: Failed to parse value for key "${key}"`, error);
      return null;
    }
  }

  setItem<T>(key: string, value: T): boolean {
    try {
      const serialized = JSON.stringify(value);
      this.#storage.setItem(key, serialized);
      return true;
    } catch(error) {
      console.error(`StorageService: Failed to set value for key "${key}"`, error);
      return false;
    }
  }

  removeItem(key: string): void {
    try {
      this.#storage.removeItem(key);
    } catch(error) {
      console.error(`StorageService: Failed to remove value for key "${key}"`, error);
    }
  }

  clear(): void{
    try{
      this.#storage.clear();
    } catch(error) {
      console.error(`StorageService: Failed to clear Storage`, error);
    }
  }
}
