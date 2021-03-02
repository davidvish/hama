import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  @Output() isLogout = new EventEmitter<void>()

  constructor(public loginService : LoginService) { }

  ngOnInit(): void {
  }
   logout(){
     this.loginService.logout()
     this.isLogout.emit
   }
}
