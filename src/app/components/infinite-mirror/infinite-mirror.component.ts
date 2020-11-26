import {
  Component,
  ChangeDetectionStrategy,
  HostListener,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Throttle } from 'src/app/decorators';

@Component({
  selector: 'app-infinite-mirror',
  templateUrl: './infinite-mirror.component.html',
  styleUrls: ['./infinite-mirror.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfiniteMirrorComponent {
  @ViewChild('container') container: ElementRef;

  @HostListener('document:mousemove', ['$event'])
  @Throttle(20)
  onMouseMove({ clientX, clientY }: MouseEvent) {
    const root = this.container.nativeElement;
    const angle = this.getAngleInDegrees(500, clientX, clientY);

    root.style.setProperty('--rotate', `${angle}deg`);
    // root.style.setProperty('--translateY', clientY / 10 + 'px');
    // root.style.setProperty('--translateZ', clientX / 100 + 'px');
  }

  private getAngleInDegrees(center: number, x: number, y: number): number {
    const deltaX = center - x;
    const deltaY = center - y;
    const radians = Math.atan2(deltaY, deltaX);
    const degree = radians * (180 / Math.PI);

    return degree;
  }
}
