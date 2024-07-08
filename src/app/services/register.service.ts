import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private apiUrl = 'http://localhost:5000/register'; // Cambia la URL según tu configuración


  constructor(private HttpClient: HttpClient) { }

  registerUser(

    full_name: string,
    username: string,
    email: string,
    password: string,
    phone: number,
    status: string,
    rol_id: string,
    ability: object

  ): Observable<any> {
    return this.HttpClient.post<any>(this.apiUrl, {
      full_name,
      username,
      email,
      password,
      phone,
      status,
      rol_id,
      ability
    }).pipe(
      tap((response) => {
        console.log(response)
      })
    )
  }
}


