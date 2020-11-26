import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-sky',
  templateUrl: './sky.component.html',
  styleUrls: ['./sky.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkyComponent {
  public range(n: number): number[] {
    return [...Array(n).keys()];
  }
}
