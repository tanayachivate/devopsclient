import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  emp;
  No;

  constructor(public routes:ActivatedRoute,
                public router:Router,
                public service:DataService) 
  {
    
    this.routes.paramMap.subscribe((params)=>{
      this.No=params.get("No");
      //alert(No);
    })
    
    this.service.getdatabyid(this.No).subscribe((Response)=>{
      this.emp=Response;
      console.log(this.emp);
    })
    
  }
  Update()
  {
    console.log(this.emp);
    this.service.Update(this.emp).subscribe((Response)=>{
      

    })
  }

  ngOnInit()
   {
     
  }
}


