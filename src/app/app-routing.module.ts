import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import {ContactFormComponent} from './contact/contact-form.component'
const routes: Routes = [
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  
  {
    path:'blog',
    component: BlogComponent
  }, 
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contact',
    component:ContactFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
