import {
  Component,
  ChangeDetectionStrategy,
  HostListener,
  ViewChild,
  ElementRef,
  OnInit,
} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Throttle } from 'src/app/decorators';

const SMALL_SCREEN_FRAMES_COUNT = 5;
const LARGE_SCREEN_FRAMES_COUNT = 8;

@Component({
  selector: 'app-infinite-mirror',
  templateUrl: './infinite-mirror.component.html',
  styleUrls: ['./infinite-mirror.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfiniteMirrorComponent implements OnInit {
  @ViewChild('container') container: ElementRef;

  public frames$: Observable<number[]>;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.frames$ = this.breakpointObserver
      .observe([Breakpoints.XSmall])
      .pipe(
        map(({ matches }) =>
          matches
            ? this.range(SMALL_SCREEN_FRAMES_COUNT)
            : this.range(LARGE_SCREEN_FRAMES_COUNT)
        )
      );
  }

  public range(n: number): number[] {
    return [...Array(n).keys()];
  }

  // @Throttle(50)
  // @HostListener('document:mousemove', ['$event'])
  // public onMouseMove({ clientX, clientY }: MouseEvent) {
  //   const root = this.container.nativeElement;
  //   const angle = this.getAngleInDegrees(500, clientX, clientY);

  //   // root.style.setProperty('--rotate', `${angle}deg`);
  //   // root.style.setProperty('--translateY', clientY / 10 + 'px');
  //   // root.style.setProperty('--translateZ', clientX / 100 + 'px');
  // }

  // private getAngleInDegrees(center: number, x: number, y: number): number {
  //   const deltaX = center - x;
  //   const deltaY = center - y;
  //   const radians = Math.atan2(deltaY, deltaX);
  //   const degree = radians * (180 / Math.PI);

  //   return Math.abs(degree);
  // }
}
