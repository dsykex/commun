import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {path: '', redirectTo: '/landing', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'landing', component: LandingComponent},
  {path: 'user', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
