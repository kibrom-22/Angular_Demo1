import { Component } from '@angular/core';
import { Employee } from '../employee';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

EmployeeObj : Employee[]=[
  {empId:10011, empName:"John", dept:"Dev"},
  {empId:10012, empName:"Eric", dept:"IT"},
  {empId:10013, empName:"Mick", dept:"Dev"},
  {empId:10014, empName:"Abel", dept:"QA"}
];

  empId = 1001;
  empName="John";
  dept="Development"

  show1:boolean=true;
  show(){
    console.log("Employee Id: "+this.empId)
    console.log("Employee Name: "+this.empName)
    console.log("Department: "+this.dept)
  }

}
