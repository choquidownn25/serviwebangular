import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  url = 'http://scratchya.com.ar/vue';
  constructor(private http: HttpClient) { }

  getBooks() {
    return this
            .http
            .get(`${this.url}/datos.php`);
        }
}
