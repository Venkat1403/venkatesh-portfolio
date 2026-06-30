import { Component, Input } from '@angular/core';
import { project } from '../models/project';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [NgFor],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() project = {} as project;
}
