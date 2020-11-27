import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExperienceComponent } from './sections/experience/experience.component';
import { ContactsComponent } from './sections/contacts/contacts.component';
import { InterestsComponent } from './sections/interests/interests.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ChipSelectionComponent } from './components/chip-selection/chip-selection.component';
import { HeaderComponent } from './sections/header/header.component';
import { AboutComponent } from './sections/about/about.component';
import { InfiniteMirrorComponent } from './components/infinite-mirror/infinite-mirror.component';
import { SkyComponent } from './components/sky/sky.component';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
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
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatAutocompleteModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
