import { FooterComponent } from '../../shared/footer/footer.component'
import { HeaderComponent } from '../../shared/header/header.component'
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { response } from 'express';


interface LoginData {
  email: string;
  password: string;
}


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, FormsModule],
  templateUrl: './login.component.html',
})
export default class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private http: HttpClient) {}

ngOnInit(): void {
    // Optional: Initialize default values or perform actions on component initialization
  }

  onSubmit(): void {
    const loginData: LoginData = {
      email: this.email,
      password: this.password,
    };

   fetch('http://localhost:5000/login')
   .then((response)=> console.log(response))
  }
}

