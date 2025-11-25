import { Component } from '@angular/core';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.html',
  styleUrls: ['./demo3.css'],
})
export class Demo3 {
  images: string[] = [
    'https://placedog.net/800/600?id=1',
    'https://placedog.net/800/600?id=2',
    'https://placedog.net/800/600?id=3',
    'https://placedog.net/800/600?id=4',
    'https://placedog.net/800/600?id=5',
    'https://placedog.net/800/600?id=6',
    'https://placedog.net/800/600?id=7',
    'https://placedog.net/800/600?id=8',
    'https://placedog.net/800/600?id=9',
    'https://placedog.net/800/600?id=10',
  ];

  current = 0;

  next() {
    this.current = (this.current + 1) % this.images.length;
  }

  prev() {
    this.current = (this.current - 1 + this.images.length) % this.images.length;
  }

  select(index: number) {
    if (index >= 0 && index < this.images.length) {
      this.current = index;
    }
  }

  onKey(e: KeyboardEvent) {
    if (e.key === 'ArrowRight') this.next();
    if (e.key === 'ArrowLeft') this.prev();
  }
}
