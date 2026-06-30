import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { project } from '../models/project';
import { tag } from '../models/tag';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  project: project[] = [];

  constructor(private titleService: Title) {
    this.titleService.setTitle('Venkatesh - Portfolio');
  }
}
