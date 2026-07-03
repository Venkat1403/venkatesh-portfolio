import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit {
  isMenuOpen = false;
  isLightMode = false;
  activeSection = 'home';

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      if (event.urlAfterRedirects === '/my-resume' || event.url === '/my-resume') {
        this.activeSection = 'my-resume';
      } else {
        setTimeout(() => this.onWindowScroll(), 100);
      }
    });
  }

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      this.isLightMode = true;
      document.documentElement.setAttribute('data-bs-theme', 'light');
    } else {
      this.isLightMode = false;
      document.documentElement.setAttribute('data-bs-theme', 'dark');
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.router.url === '/my-resume') {
      this.activeSection = 'my-resume';
      return;
    }

    const sections = ['home', 'about', 'skills', 'resume', 'contact'];
    let current = 'home';

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        // If element is at or above the top quarter of the screen
        if (rect.top <= 250) {
          current = section;
        }
      }
    }
    
    // Check if scrolled to the very bottom
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
      current = 'contact';
    }

    this.activeSection = current;
  }

  toggleTheme() {
    this.isLightMode = !this.isLightMode;
    const theme = this.isLightMode ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  
  closeMenu() {
    this.isMenuOpen = false;
  }

  scrollTo(section: string) {
    this.closeMenu();
    this.activeSection = section;
    
    if (section === 'my-resume') {
      this.router.navigate(['/my-resume']);
      return;
    }
    
    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          const element = document.getElementById(section);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      });
    } else {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }
}

