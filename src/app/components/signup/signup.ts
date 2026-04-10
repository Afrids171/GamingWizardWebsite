import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../Services/user-service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-signup',
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  isProfile = false;
constructor(private userservice:UserService,private router:Router){}

fullName = new FormControl('')
email = new FormControl('')
password = new FormControl('')
phoneNumber = new FormControl('')
address = new FormControl('')

    
  

  SignUpBtn() {

  let data = {
    FullName: this.fullName.value,
    Email: this.email.value,
    Password: this.password.value,
    PhoneNumber: this.phoneNumber.value,
    Address: this.address.value
  };

  console.log("Sending Data:", data); // 👈 check this

  this.userservice.CreateUser(data).subscribe(
    (res: any) => {
      alert("Signup successful");
      this.router.navigate(['/login']);
    },
    (err: any) => {
            if (err.status === 400) {
              alert("Email already exists");
            } else {
      console.log("Error:", err.error); // 👈 VERY IMPORTANT
      alert("Signup failed");}
    }
  );
}
}
