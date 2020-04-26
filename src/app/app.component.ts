import { Component } from '@angular/core';
import { BookService } from './book.service';
import { Book } from './Book';
import { DatosService } from './datos.service';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;
  title = 'proyectoservice';
  books: Book[];
  articulos = null;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("http://scratchya.com.ar/vue/datos.php")
      .subscribe(
        result => {
          this.articulos  = result;
        },
        error => {
          console.log('problemas');
        }
      );
  }
}
