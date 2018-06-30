import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-menu',
  templateUrl: './search-menu.component.html',
  styleUrls: ['./search-menu.component.css']
})
export class SearchMenuComponent implements OnInit {
  @Output() updateStaff: EventEmitter<any> = new EventEmitter();
  selectedItem: string = "Name";
  isSelecting: boolean = false;
  selectList: Array<string> = new Array<string>();
  searchTerm: string = "";

  constructor() {
    this.selectList.push("Name");
    this.selectList.push("Department");
    this.selectList.push("Profile");
  }

  updateSearch(): void {
    let searchDetails = {
      searchTerm: this.searchTerm, 
      selectedItem: this.selectedItem
    }
    this.updateStaff.emit(searchDetails);
  }

  ngOnInit() {
  }

}
