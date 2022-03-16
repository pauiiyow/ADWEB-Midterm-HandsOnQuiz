import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-emplist1',
  templateUrl: './emplist1.component.html',
  styleUrls: ['./emplist1.component.css']
})


export class Emplist1Component implements OnInit {
  elist1: any;
  constructor(private empservice: EmpServiceService) { }

  ngOnInit(): void {
    this.elist1 = this.empservice.empList;
  }

}
