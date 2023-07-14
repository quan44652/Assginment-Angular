import { Component } from '@angular/core';
import { IUser } from 'src/app/common';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-navigate',
  templateUrl: './top-navigate.component.html',
  styleUrls: ['./top-navigate.component.css']
})
export class TopNavigateComponent {
user!: any;
userString!:any
faUser=faUser

ngOnInit () {
  this.userString = localStorage.getItem('user')

  if(this.userString !== null) {
    this.user = JSON.parse(this.userString)
  }  
  
}

onLogout () {
  localStorage.clear()
}
}
