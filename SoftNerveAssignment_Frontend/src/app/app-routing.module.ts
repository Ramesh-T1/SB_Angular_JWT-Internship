import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListofAllStudentsComponent } from './listof-all-students/listof-all-students.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'listof-all-students',component:ListofAllStudentsComponent},
  {path:'user',component:UserComponent},
  {path:'user/:id',component:UserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
