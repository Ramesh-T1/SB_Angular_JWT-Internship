import { Component, OnInit } from '@angular/core';
import { ListStudentsService } from '../service/list-students.service';
import {Student} from './listof-all-students.model'
import { Router } from '@angular/router';


@Component({
  selector: 'app-listof-all-students',
  templateUrl: './listof-all-students.component.html',
  styleUrls: ['./listof-all-students.component.css']
})

export class ListofAllStudentsComponent implements OnInit{
  listOfStudents: Student[] = [];
  msg:string=''
  //ids:any;//new
  constructor(private listService:ListStudentsService,
    private router:Router){};
  
  ngOnInit(): void {
     this.getList();
    }
  getList()
  {
    this.listService.retrieveall().subscribe(
      (response: Student[])=>{
        this.listOfStudents=response;
      }
    )
  }
  deleteRecord(id:number){
     this.listService.deleteUser(id).subscribe(
       (response:any)=>{
          console.log(response);
          this.msg=`Record with id ${id} Deleted Successfully!!!`;
          this.getList();
       }
     )
  }

  updateRecord(id:number){
    //this.msg=`Record with id ${id} updated Successfully`;
    this.router.navigate(['user',id]);
    //new
    //this.ids=id;
    //this.router.navigate(['user'],{queryParams:{ids:id}});
  }
  register()
  {
    this.router.navigate(['user',-1]);
    //new
  //this.router.navigate(['user'],{queryParams:{ids:-1}});
  }
 
}
