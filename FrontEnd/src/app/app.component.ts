import { Component } from '@angular/core';
import { Staff } from './classes/staff';
import { ApiService } from './services/api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  allStaff: Array<Staff>;

  constructor(private apiService: ApiService) {
    this.allStaff = new Array<Staff>();

    this.apiService.getStaff("", "").subscribe(response => this.allStaff = response);
  }

  updateStaff(event): void {
    this.apiService.getStaff(event.searchTerm, event.selectedItem).subscribe(response => this.allStaff = response);
  }
}
