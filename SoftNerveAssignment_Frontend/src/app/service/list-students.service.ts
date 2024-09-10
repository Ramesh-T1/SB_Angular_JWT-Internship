import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Student} from '../listof-all-students/listof-all-students.model'



@Injectable({
  providedIn: 'root'
})
export class ListStudentsService {  
 /* createBasicAuthenticationHttpHeader(){
    let username='ramesh'
    let password='dummy'
    let basicAuthHeaderString='Basic'+window.btoa(username+':'+password);
    return basicAuthHeaderString;
  } */

  constructor(private http:HttpClient) { }
   getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token'); // Retrieve token from localStorage
    console.log(token);
    return new HttpHeaders({
      // 'Authorization': `Bearer ${token}` // Include the JWT token in the header
      'Authorization': `${token}`
    });
  } 
  retrieveall(){ 
    const headers = this.getAuthHeaders(); 
    return this.http.get<Student[]>(`http://localhost:8080/retrieveall`,{headers})
  }

  deleteUser(id:number) {
    const headers = this.getAuthHeaders();
    return this.http.delete(`http://localhost:8080/delete/${id}`,{headers})
  }

  retrieveSingleUser(id:number)
  {
    const headers = this.getAuthHeaders();
    return this.http.get<Student>(`http://localhost:8080/retrieveById/${id}`,{headers})
  }

  updateUser(id:number,Student:Student)
  {
    const headers = this.getAuthHeaders();
    return this.http.put(`http://localhost:8080/update/${id}`,Student,{headers})
  }

  register(Student:Student){
    const headers = this.getAuthHeaders();
    return this.http.post(`http://localhost:8080/register`,Student,{headers})
  }
}
