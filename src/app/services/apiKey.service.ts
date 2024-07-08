// api-key.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIKey } from '../interfaces/apiKey';
import { User } from '../interfaces/user';
import { catchError, map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiKeyService {

  constructor(private http: HttpClient) { }

  getAccessToken(): string {
    const token = localStorage.getItem('authToken');
    if (!token) {
      throw new Error('No se encontró el token de acceso en el local storage');
    }
    return token;
  }

  getUserId(): object | null {
    const userDataString = localStorage.getItem('userData');

    if (!userDataString) {
      return null;
    }

    const userData: User = JSON.parse(userDataString);
    return { userId: userData._id}
  }

  getApiKeycall() {
    const accessToken = this.getAccessToken();
    const body = this.getUserId()
    const url = 'http://localhost:5000/asignar-clave-api';

    const options = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`
      }
    };

    return this.http.post<any>(url, body, options)
    .pipe(
      map((response: any) => response as APIKey), // Convertir la respuesta a ApiKey
      catchError(error => {
        console.error('Error al obtener la clave API:', error);
        return error; // Re-lanzar el error para su manejo en el componente
      })
    );
  }
}
