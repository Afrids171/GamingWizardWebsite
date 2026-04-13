import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../../Services/user-service';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private userService: UserService) {}  
 isProfile = false;
 isLogin = false;

 ngOnInit() {
  this.isProfile = this.userService.isProfile;
  this.isLogin = this.userService.IsLogin;
  
 }  

}
