import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { LandingComponent } from './landing/landing.component';
import {TimeAgoPipe} from 'time-ago-pipe';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { GroupsComponent } from './groups/groups.component';
import { GroupComponent } from './group/group.component';
import { UsersComponent } from './users/users.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { MyJobsComponent } from './my-jobs/my-jobs.component';
import { MyEventsComponent } from './my-events/my-events.component';
import { CpComponent } from './cp/cp.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
 
export const fbConfig = {
  apiKey: "AIzaSyDdeEahrBiiFWcghRiZRxZWYcTSPCgdYo8",
  authDomain: "warhol-a1a0e.firebaseapp.com",
  databaseURL: "https://warhol-a1a0e.firebaseio.com",
  projectId: "warhol-a1a0e",
  storageBucket: "warhol-a1a0e.appspot.com",
  messagingSenderId: "379087008754",
  appId: "1:379087008754:web:07acab08d2a9c3d5"
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    LandingComponent,
    ProfileSettingsComponent,
    GroupsComponent,
    GroupComponent,
    UsersComponent,
    ChallengesComponent,
    MyJobsComponent,
    MyEventsComponent,
    CpComponent,
    UpdateProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    HttpClientModule,
    AngularEditorModule,
    AngularFireModule.initializeApp(fbConfig),
    AngularFirestoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
