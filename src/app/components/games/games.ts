import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../../Services/user-service';

@Component({
  selector: 'app-games',
  imports: [RouterLink],
  templateUrl: './games.html',
  styleUrl: './games.css',
})
export class Games {
constructor (private userService : UserService) {} 
isProfile = false;  
IsLogin = false;  

ngOnInit() {  
this.IsLogin = this.userService.IsLogin;
this.isProfile = this.userService.isProfile;  
}
}
