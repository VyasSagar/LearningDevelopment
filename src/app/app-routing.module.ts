import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentationsComponent } from './forums/documentations/documentations.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SplashscreenComponent } from './splashscreen/splashscreen.component';

const routes: Routes = [
  { path: 'documents', component: DocumentationsComponent },
  { path: 'home', component: HomePageComponent },
  { path: '', component: SplashscreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
