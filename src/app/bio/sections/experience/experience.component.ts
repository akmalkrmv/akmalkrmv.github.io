import { Component, ChangeDetectionStrategy } from '@angular/core';
import { resume } from 'src/app/data/resume';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {
  public data = [];
  public filterTags = [];
  public selectedTags = [];

  ngOnInit() {
    const tags = new Set();
    resume.jobs.forEach((job) => job.tags.forEach((tag) => tags.add(tag)));

    this.filterTags = [...tags].sort();
    this.data = resume.jobs;
  }

  public filterJobs(selectedTags: string[]) {
    this.selectedTags = selectedTags;

    if (selectedTags && selectedTags.length) {
      this.data = resume.jobs.filter((job) =>
        selectedTags.some((s) => job.tags.includes(s))
      );
    } else {
      this.data = resume.jobs;
    }
  }
}
