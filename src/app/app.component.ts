import { Component, OnInit } from '@angular/core';
import { AppService } from './_services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  loggedIn = false;
  loggedInUser = "";

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.loggedIn = this.appService.userAuthenticated;
    this.loggedInUser = localStorage.getItem('userName');
  }
  
}
