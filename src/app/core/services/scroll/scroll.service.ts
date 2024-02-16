import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  scrollPosition = new EventEmitter<number>();

  constructor() {
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      this.scrollPosition.emit(scrollPosition);
    });
  }
}
