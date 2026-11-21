import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-my-resume',
  standalone: true,
  imports: [],
  templateUrl: './my-resume.component.html',
  styleUrl: './my-resume.component.scss'
})
export class MyResumeComponent {
  // Replace src/assets/Venkatesh_K_Resume.pdf with a new PDF to update the resume.
  readonly pdfPath = 'assets/Venkatesh_K_Resume.pdf';
  readonly viewerUrl: SafeResourceUrl;

  constructor(sanitizer: DomSanitizer) {
    this.viewerUrl = sanitizer.bypassSecurityTrustResourceUrl(`${this.pdfPath}#toolbar=0&navpanes=0&view=FitH`);
  }
}
