import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent {
  @Input() images: string[] = [];
  public selectedIndex: number = 0;

  public next() {
    this.selectedIndex++;
    this.selectedIndex %= this.images.length;
  }

  public prev() {
    this.selectedIndex++;
    this.selectedIndex %= this.images.length;
  }
}
