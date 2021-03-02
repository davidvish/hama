import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component';
import {JoinformComponent } from './joinform/joinform.component'

 
const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'header', component:HeaderComponent},
  {path:'footer', component:FooterComponent},
  {path:'joinform',component:JoinformComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
