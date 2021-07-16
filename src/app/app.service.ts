import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from './models/user.model';
import { Observable, Subject } from 'rxjs';



//Injectable cioè che può essere riutilizzata all'interno di un costruttore
@Injectable({
    providedIn: 'root'
})
//creo il service nel quale raccogliere funzioni da richiamare in tutti i componenti in cui serve usare queste funzioni
export class appService{

    private user = new Subject<string>();
    userChanged$ = this.user.asObservable();

    constructor(public http: HttpClient){}

    downloadUsers(): Observable<User[]>{
        return this.http.get<User[]>('https://crudcrud.com/api/180a71662a0c43a8979b4c7df3ccc894/users');
    }

    changeUser(u: string){
        this.user.next(u);
    }
}