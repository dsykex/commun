import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LandingComponent } from './landing/landing.component';
import { GroupsComponent } from './groups/groups.component';
import { GroupComponent } from './group/group.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { ChallengesComponent } from './challenges/challenges.component';

const routes: Routes = [
  {path: '', redirectTo: '/landing', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'landing', component: LandingComponent},
  {path: 'user/:id', component: UserComponent},
  {path: 'profile-settings', component: ProfileSettingsComponent},
  {path: 'my-groups', component: GroupsComponent},
  {path: 'group/:name', component: GroupComponent},
  {path: 'challenges', component: ChallengesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
