import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms'
import { Router } from '@angular/router';

import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-Employee',
  templateUrl: './add-Employee.component.html',
  styleUrls: ['./add-Employee.component.css']
})
export class AddComponentComponent implements OnInit{

  EmployeeDetails:FormGroup;

  constructor(private router:Router){

  }
  ngOnInit(): void {
      this.EmployeeDetails=new FormGroup({
          firstname:new FormControl(''),
          lastname:new FormControl(''),
          emailAddress:new FormControl(''),
          contact_no:new FormControl('')
      })
  }

  onSubmit(){
    const employee={employeeId:uuidv4(),...this.EmployeeDetails.value}
    localStorage.setItem(employee.employeeId,JSON.stringify(employee));
    this.router.navigate(['/'])
  }
}
