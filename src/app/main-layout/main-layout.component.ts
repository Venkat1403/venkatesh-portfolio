import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { ResumeComponent } from '../resume/resume.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [HomeComponent, AboutComponent, SkillsComponent, ResumeComponent, ContactComponent],
  template: `
    <div id="home"><app-home></app-home></div>
    <div id="about" class="mt-5 pt-5"><app-about></app-about></div>
    <div id="skills" class="mt-5 pt-5"><app-skills></app-skills></div>
    <div id="resume" class="mt-5 pt-5"><app-resume></app-resume></div>
    <div id="contact" class="mt-5 pt-5"><app-contact></app-contact></div>
  `
})
export class MainLayoutComponent {}
