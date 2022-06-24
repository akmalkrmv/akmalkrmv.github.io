import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { SkyComponent } from '../components/sky/sky.component';
import { CarouselComponent } from '../components/carousel/carousel.component';
import { ChipSelectionComponent } from '../components/chip-selection/chip-selection.component';
import { InfiniteMirrorComponent } from '../components/infinite-mirror/infinite-mirror.component';

import { BioRoutingModule } from './bio-routing.module';
import { BioComponent } from './bio.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { ContactsComponent } from './sections/contacts/contacts.component';
import { InterestsComponent } from './sections/interests/interests.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { HeaderComponent } from './sections/header/header.component';
import { AboutComponent } from './sections/about/about.component';

@NgModule({
  declarations: [
    BioComponent,
    ExperienceComponent,
    ContactsComponent,
    InterestsComponent,
    ProjectsComponent,
    ChipSelectionComponent,
    HeaderComponent,
    AboutComponent,
    InfiniteMirrorComponent,
    SkyComponent,
    CarouselComponent,
  ],
  imports: [
    CommonModule,
    BioRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatChipsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatRippleModule,
    MatDividerModule,
  ],
})
export class BioModule {}
