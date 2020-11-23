import { ComponentFixture } from '@angular/core/testing';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { LinksComponent } from "./links/links.component";


const routes: Routes = [
  {
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'links',
    component:LinksComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
