import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
    SplashscreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
