import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../../Services/user-service';

@Component({
  selector: 'app-aboutus',
  imports: [RouterLink],
  templateUrl: './aboutus.html',
  styleUrl: './aboutus.css',
})
export class Aboutus {
constructor(private UserService: UserService) {}  
isProfile = false;
IsLogin = false;
ngonInit() 
{
   this.isProfile = this.UserService.isProfile
   this.IsLogin = this.UserService.IsLogin
}

}
