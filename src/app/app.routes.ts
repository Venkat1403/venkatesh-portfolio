import { Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MyResumeComponent } from './my-resume/my-resume.component';

export const routes: Routes = [
    { path: '', component: MainLayoutComponent },
    { path: 'my-resume', component: MyResumeComponent },
    { path: '**', redirectTo: '' }
];
