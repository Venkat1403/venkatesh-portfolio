import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  slides: string[] = [
    "4+ Years of Professional Web Development Experience",
    "Expertise in Angular 9+ and Modern Frontend Architecture",
    "Dedicated Frontend Developer Passionate About UI/UX",
    "Active TQI Volunteer Mentoring Youth & Community"
  ];
  
  currentSlideIndex: number = 0;
  private intervalId: any;

  constructor(
    private titleService: Title,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.titleService.setTitle('Venkatesh - Home');
  }

  ngOnInit(): void {
    this.startSlider();
  }

  ngOnDestroy(): void {
    this.stopSlider();
  }

  startSlider(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.intervalId = setInterval(() => {
        this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
      }, 3000);
    }
  }

  stopSlider(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  setSlide(index: number): void {
    this.currentSlideIndex = index;
    // Reset timer when manually clicked
    this.stopSlider();
    this.startSlider();
  }
}
