import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { MsalModule, MsalRedirectComponent, MsalGuard, MsalInterceptor } from '@azure/msal-angular';
import { InteractionType, PublicClientApplication } from '@azure/msal-browser';
const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;
import { TopNaveComponent } from './top-nave/top-nave.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LearningModulesComponent } from './learning-modules/learning-modules.component';
import { ForumsComponent } from './forums/forums.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { DocumentationsComponent } from './forums/documentations/documentations.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { ArsenalComponent } from './arsenal/arsenal.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { SplashscreenComponent } from './splashscreen/splashscreen.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNaveComponent,
    LearningModulesComponent,
    ForumsComponent,
    DocumentationsComponent,
    HomePageComponent,
    FooterComponent,
    ArsenalComponent,
    CertificationsComponent,
    SplashscreenComponent,
    ProfileComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CKEditorModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    HttpClientModule,
    MsalModule.forRoot(new PublicClientApplication({
      auth: {
        clientId: '64f51304-3c0a-4082-ad23-2b62ba2f3b70',
        authority: 'https://login.microsoftonline.com/f795bab8-f723-4a7c-afbf-4a7b5369243b',
        redirectUri: 'http://localhost:4200'
      },
      cache: {
        cacheLocation: 'localStorage',
        storeAuthStateInCookie: isIE,
      }
    }), {
      interactionType: InteractionType.Redirect,
      authRequest: {
        scopes: ['user.read']
      }
    }, {
      interactionType: InteractionType.Redirect,
      protectedResourceMap: new Map([
        ['https://graph.microsoft.com/v1.0/me', ['user.read']]
      ])
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    },
    MsalGuard
  ],
  bootstrap: [AppComponent, MsalRedirectComponent]
})
export class AppModule { }
