import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-sky',
  templateUrl: './sky.component.html',
  styleUrls: ['./sky.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkyComponent {
  constructor(private theme: ThemeService) {}

  public range(n: number): number[] {
    return [...Array(n).keys()];
  }

  public toggleTheme() {
    this.theme.toggleTheme();
  }
}
