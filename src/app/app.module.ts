import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {ContentComponent} from './content/content.component';
import {HomeComponent} from "./pages/home/home.component";
import {ContentStyleDirective} from './content/content-style.directive';
import {LoginComponent} from './pages/login/login.component';
import {AppService} from "./app-service";
import {HttpModule} from "@angular/http";
 import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {FormUser} from "./pages/user/add-user/form-user";
import {UserService} from "./pages/user/service/user-service";
import {UserComponent} from "./pages/user/user.component";
import {AddUserComponent} from "./pages/user/add-user/add-user.component";
import { ContactArrayComponent } from './pages/user/contact-array/contact-array.component';
import {AuthService} from "./pages/login/auth.service";
import {TokenGuard} from "./pages/guard/token-guard";
import { EditUserComponent } from './pages/user/edit-user/edit-user.component';
import { UserPipe } from './pages/user/user.pipe';
import {TeamDirective} from "./pages/user/team-directive";


//src/app/app.module.ts
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    HomeComponent,
    ContentStyleDirective,
    LoginComponent,
    UserComponent,
    AddUserComponent,
    ContactArrayComponent,
    EditUserComponent,
    UserPipe,
    TeamDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home',canActivate: [TokenGuard], component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'user',canActivate: [TokenGuard], component: UserComponent},
      {path: 'form_user',canActivate: [TokenGuard], component: AddUserComponent},
      {path: 'form_user/:id',canActivate: [TokenGuard], component: EditUserComponent},
       {path: '', redirectTo: 'home', pathMatch: 'full'},
       {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]),
  ],

  //src/app/app.module.ts
  providers: [TokenGuard,

    UserService, AppService,FormUser,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
