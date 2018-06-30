import { Component, OnInit, Input } from '@angular/core';
import { Staff } from '../../classes/staff'

@Component({
  selector: 'app-staff-details',
  templateUrl: './staff-details.component.html',
  styleUrls: ['./staff-details.component.css']
})
export class StaffDetailsComponent implements OnInit {
  @Input() staff: Staff;

  constructor() { }

  ngOnInit() {
  }

}
