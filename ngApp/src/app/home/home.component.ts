import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employees;
  constructor(public router:Router,public service:DataService) 
  {
    this.getData();
    }
    getData()
    {
      let StateOfResult=this.service.GetData();
    StateOfResult.subscribe((result)=>{
      this.employees=result;
    });
    }

  ngOnInit() 
  {
    // this.employees=[
    // {no :1,name:"tanu",address:"satara"}, 
    // {no :2,name:"sus",address:"karad"}, 
    // {no :3,name:"aditi",address:"pune"}
    // ];
  }
  Delete(no)
{

  this.service.Delete(no).subscribe((Response)=>{
    console.log(Response);
    this.getData();
  })

  //alert(no);

  }



  Gotoregister()
  {
    this.router.navigate(['register']);
  }

}
