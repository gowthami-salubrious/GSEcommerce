import { Component, OnInit } from '@angular/core';
import { Alert, Login } from '../_model/login.model';
import { LoginService } from '../_services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { empty } from 'rxjs';
import { AppService } from '../_services/app.service';
import { NgbAlertConfig, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';


/*const ALERTS: Alert[] = [{
  type: 'warning',
  message: 'This is a warning alert',
}];*/

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService, NgbAlertModule]
})
export class LoginComponent implements OnInit {
  isAuthentication: boolean;
  submitted: boolean = false;
  emptyCheck: boolean = false;
  userName: string;
  userPass: string;

  alerts: Alert[] = [{
    type: 'danger',
    message: 'Invalid Username OR Password',
  },
  {
    type: 'danger',
    message: "Enter Username & Password",
  }];

  constructor(private router: Router, private route: ActivatedRoute, private appService: AppService, alertConfig: NgbAlertConfig) {
    alertConfig.type = 'success';
    alertConfig.dismissible = false;
   }

  ngOnInit() {
    
  }

  Onsubmit( form ) {
    this.submitted = true;
    this.userName = form.value.userName;
    this.userPass = form.value.userPass;

    if(this.userName === "" && this.userPass === "" )
    {
      this.emptyCheck = false;
    }else{
      if(this.userName === "admin" && this.userPass === "admin"){
        this.isAuthentication = true;
        this.appService.userAuthenticated = true;
        localStorage.setItem('userName',this.userName);
        this.router.navigate(['dashboard'] );
        this.emptyCheck = true;
      }
      else{
        this.isAuthentication = false;
        this.appService.userAuthenticated = false;
        this.emptyCheck = true;
      }
    }
    
    
  }
  
  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }
  

}
