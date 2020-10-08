import { Component, ChangeDetectionStrategy } from '@angular/core';
import { resume } from 'src/app/resume';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {
  public data = resume;
}
