import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./public/pages/home/home.component";
import {AboutComponent} from "./public/pages/about/about.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {StudentManagementComponent} from "./learning/pages/student-management/student-management.component";
import {SignInComponent} from "./iam/pages/sign-in/sign-in.component";
import {authenticationGuard} from "./iam/services/authentication.guard";
import {SignUpComponent} from "./iam/pages/sign-up/sign-up.component";

const routes: Routes = [
  { path: 'home',               component: HomeComponent },
  { path: 'about',              component: AboutComponent },
  { path: 'learning/students',  component: StudentManagementComponent, canActivate: [authenticationGuard],},
  { path: 'sign-in',            component: SignInComponent },
  { path: 'sign-up',            component: SignUpComponent},
  { path: '',                   redirectTo: 'home', pathMatch: 'full' },
  { path: '**',                 component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
