import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

    users : User[] = new Array();

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
        this.createApi();
        this.loadSingleApi();
        this.editSingleApi();
        this.loadApi();
        this.deleteSingleApi();
  }

  loadApi(): void{
    this.http.get('https://crudcrud.com/api/180a71662a0c43a8979b4c7df3ccc894/users').subscribe(res => {
        console.log(res);
    })
  }

  loadSingleApi(): void{
    this.http.get<User[]>('https://crudcrud.com/api/180a71662a0c43a8979b4c7df3ccc894/users').subscribe(res => {
        this.users = res;
        console.log(this.users);
    })
  }

  editSingleApi(): void{
    this.http.put('https://crudcrud.com/api/180a71662a0c43a8979b4c7df3ccc894/users/60e81973209ad703e8101a8a', { "name":"Maria De Filippi", "age":60, "colour":"blue" }).subscribe(res => {
        console.log(res);
    })
  }

  deleteSingleApi(): void{
    this.http.delete('https://crudcrud.com/api/180a71662a0c43a8979b4c7df3ccc894/users/60e81973209ad703e8101a8a').subscribe(res => {
        console.log(res);
    })
  }

  createApi(): void{
    this.http.post('https://crudcrud.com/api/180a71662a0c43a8979b4c7df3ccc894/users', { "name":"Pippo Baudo", "age":80, "colour":"blue" }).subscribe(res => {
        console.log(res);
    })
  }
}
