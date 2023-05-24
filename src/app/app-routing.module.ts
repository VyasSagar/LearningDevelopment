import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentationsComponent } from './forums/documentations/documentations.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SplashscreenComponent } from './splashscreen/splashscreen.component';
import { ProfileComponent } from './profile/profile.component';															   
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BrowserUtils } from '@azure/msal-browser';


const routes: Routes = [
  { path: 'documents', component: DocumentationsComponent },
  { path: 'home', component: HomePageComponent },
  { path: '', component: SplashscreenComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'landing-page', component: LandingPageComponent }
];

const isIframe = window !== window.parent && !window.opener;

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    
    initialNavigation: !BrowserUtils.isInIframe() && !BrowserUtils.isInPopup() ? 'enabledNonBlocking' : 'disabled' 
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
