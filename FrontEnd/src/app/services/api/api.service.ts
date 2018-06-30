import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient){
  }

  getStaff(searchTerm: string, searchType: string): Observable<any[]> {
    let sTerm: string = "";
    let sType: string = "";

    if (searchType.length > 0) {
      sType = "?searchType="+searchType;
    }

    if (searchTerm.length > 0) {
      sTerm = "&searchTerm="+searchTerm;
    }
    
    return this.http.get("/api/staff_get.php"+sType+sTerm) as Observable<any>;
  }
}
