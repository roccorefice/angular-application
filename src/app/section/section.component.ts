import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  constructor(public http: HttpClient ) { }

  // METODO 1
  // ngOnInit(): void {
  //   //In questo modo stiamo dicendo di fare la chiamata, e sottoscrivi all'Osservable che mi ritorni come risultato una callback che attiverai solo nel momento in cui l'Osservable riceverà la risposta -> il metodo subscribe() attiverà la callback
  //   this.loadApi().subscribe(this.callback);
  // }

  // //Observable è un tipo di oggetto che fa una chiamata (nel nostro caso http) e attende una risposta
  // loadApi(): Observable<Object> {
  //   return this.http.get('https://dog.ceo/api/breeds/list/all')
  // }
  // //Con la funzione di callback trasportiamo i dati di risposta (object) sul client
  // callback = (res: object) => {
  //   console.log(res);
    
  // }


  // METODO 2
  ngOnInit(): void {
    this.loadApi();
  }

  loadApi(): void{
    this.http.get('https://dog.ceo/api/breeds/list/all').subscribe(res => {
        console.log(res);
    })
  }
}
