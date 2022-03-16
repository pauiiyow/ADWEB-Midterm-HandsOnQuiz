import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-emplist3',
  templateUrl: './emplist3.component.html',
  styleUrls: ['./emplist3.component.css']
})
export class Emplist3Component implements OnInit {
  elist3: any;
  constructor(private empservice: EmpServiceService) { }

  ngOnInit(): void {
    this.elist3 = this.empservice.empList;
  }

}
