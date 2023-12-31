import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionComponent } from './components/abouts/mission/mission.component';
import { TeamComponent } from './components/abouts/team/team.component';
import { BackendComponent } from './components/backend/backend.component';
import { ContactComponent } from './components/contact/contact.component';
import { FoundationComponent } from './components/foundation/foundation.component';
import { FullstackComponent } from './components/fullstack/fullstack.component';
import { HomeComponent } from './components/home/home.component';
import { IotComponent } from './components/iot/iot.component';
import { PlacementsComponent } from './components/placements/placements.component';
import { SEOComponent } from './components/seo/seo.component';
import { SignupComponent } from './components/signup/signup.component';
import { StudentGalleryComponent } from './components/student-gallery/student-gallery.component';
import { TrainingComponent } from './components/training/training.component';
import { WebdevComponent } from './components/webdev/webdev.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: '', children: [

      {
        path: 'team',
        component: TeamComponent
      },
      {
        path: 'mission',
        component: MissionComponent
      },
    ]
  },
  {
    path: '', children: [

      {
        path: 'foundation',
        component: FoundationComponent
      },
      {
        path: 'webdev',
        component: WebdevComponent
      },
      {
        path: 'backend',
        component: BackendComponent
      },
      {
        path: 'fullstack',
        component: FullstackComponent
      },
      {
        path: 'iot',
        component: IotComponent
      },
    ]
  },
  {
    path: '', children: [

      {
        path: 'students-gallery',
        component: StudentGalleryComponent
      },
      {
        path: 'training',
        component: TrainingComponent
      },
      {
        path: 'placements',
        component: PlacementsComponent
      }
     
    ]
  },
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: SignupComponent },
   { path: 'seo', component: SEOComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
