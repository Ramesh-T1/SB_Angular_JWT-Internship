import { Component, OnInit } from '@angular/core';
import {ListStudentsService} from '../service/list-students.service'
import { ActivatedRoute } from '@angular/router';
import { Student } from '../listof-all-students/listof-all-students.model';
import {Router} from '@angular/router'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{
  id:any;
  newStudent:any;

  constructor(private nservice:ListStudentsService
    ,private route:ActivatedRoute,private router:Router){}
  
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']; //required
    //this.id = this.route.snapshot.queryParamMap.get('ids'); //new
     this.newStudent=new Student(this.id,'',this.id,'',this.id) 
     if(this.id!=-1)
     {
      this.nservice.retrieveSingleUser(this.id).subscribe(
       (data: any)=>this.newStudent=data
      )
     }
  }
  saveUser()
  {
    if(this.id!=-1)
    {
     this.nservice.updateUser(this.id,this.newStudent).subscribe(
      (data: any)=>{ console.log(data);
      this.router.navigate(['listof-all-students']);}
     )
    }
    else{
      this.nservice.register(this.newStudent).subscribe(
      (data:any)=>{
        console.log(data);
        this.router.navigate(['listof-all-students'])
      }
     )
    }
  }

}
