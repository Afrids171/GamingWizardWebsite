import { Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../Services/user-service';

@Component({
  selector: 'app-profile',
  imports: [RouterLink],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {

  constructor(private userService: UserService, private router: Router) { }


  isProfile = true;
  customerData: any = {};
  userName: string = '';

  customerDetails: any = '';
  ngOnInit() {



    const userData = localStorage.getItem('user');

    if (userData) {
      const user = JSON.parse(userData);
      this.userName = user.fullName;
      console.log("User Name:", this.userName);
    }



    let cartItems = localStorage.getItem('user');
    if (cartItems) {
      var products = JSON.parse(cartItems);
      this.customerData = products;
      console.log("customer Details:", this.customerData);
    }


  }


  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login'], { replaceUrl: true });
    this.userService.isProfile = false;
    this.userService.IsLogin = false;
    localStorage.removeItem('cartItems');
    localStorage.removeItem('user')
    alert('You have been logged out Successfully....');
  }

  ProductData = signal<any[]>([]);
 
  }

