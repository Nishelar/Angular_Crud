import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{

  Employees:any
  page:number=1;
  count:number=0;
  tableSize:number=7;

  keyList=Object.keys(localStorage);

  ngOnInit(): void {
    this.Employees=this.keyList.map(element=>{
      return element=JSON.parse(localStorage.getItem(element));
    })
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.Employees=this.keyList.map(element=>{
      return element=JSON.parse(localStorage.getItem(element));
    })
  }

  handleDelete(empId){
    localStorage.removeItem(empId)
    this.keyList=Object.keys(localStorage)
    this.Employees=this.keyList.map(element=>{
      return element=JSON.parse(localStorage.getItem(element));
    })
  }

}
