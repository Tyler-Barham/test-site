import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StaffDetailsComponent } from './components/staff-details/staff-details.component';
import { SearchMenuComponent } from './components/search-menu/search-menu.component';

import { ApiService } from './services/api/api.service';

@NgModule({
  declarations: [
    AppComponent,
    StaffDetailsComponent,
    SearchMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
