import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule, provideHttpClient, withInterceptors} from "@angular/common/http";
import {MatFormField, MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCard, MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {StudentsService} from "./learning/services/students.service";
import {AboutComponent} from './public/pages/about/about.component';
import {HomeComponent} from './public/pages/home/home.component';
import {PageNotFoundComponent} from './public/pages/page-not-found/page-not-found.component';
import {
  StudentCreateAndEditComponent
} from './learning/components/student-create-and-edit/student-create-and-edit.component';
import {StudentManagementComponent} from './learning/pages/student-management/student-management.component';
import {SignInComponent} from './iam/pages/sign-in/sign-in.component';
import {SignUpComponent} from './iam/pages/sign-up/sign-up.component';
import {AuthenticationSectionComponent} from './iam/components/authentication-section/authentication-section.component';
import {authenticationInterceptor} from "./iam/services/authentication.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    PageNotFoundComponent,
    StudentCreateAndEditComponent,
    StudentManagementComponent,
    SignInComponent,
    SignUpComponent,
    AuthenticationSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormField,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatCard,
    MatCardModule,
    MatGridListModule
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([authenticationInterceptor])),
    StudentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
