import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-resume',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './my-resume.component.html',
  styleUrl: './my-resume.component.scss'
})
export class MyResumeComponent {
  @ViewChild('resumeDocument') resumeDocument!: ElementRef;
  isDownloading = false;

  public downloadPDF(): void {
    if (!this.resumeDocument) {
      return;
    }
    
    this.isDownloading = true;
    const element = this.resumeDocument.nativeElement;
    
    // Use html2pdf.js for native page-break handling
    // @ts-ignore
    import('html2pdf.js').then(html2pdf => {
      const opt: any = {
        margin:       0, // 0 margin so the 210mm element perfectly fits the A4 page
        filename:     'Venkatesh_K_Resume.pdf',
        image:        { type: 'jpeg', quality: 1.0 },
        html2canvas:  { scale: 2, useCORS: true, logging: false },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak:    { mode: ['css', 'legacy'], avoid: ['.experience-item', '.education-item', '.section-text'] } // Automatically avoids breaking these elements across pages
      };

      (html2pdf as any).default().set(opt).from(element).save().then(() => {
        this.isDownloading = false;
      }).catch((err: any) => {
        console.error('Error generating PDF', err);
        this.isDownloading = false;
      });
    }).catch(err => {
      console.error('Could not load html2pdf.js', err);
      this.isDownloading = false;
    });
  }
}
