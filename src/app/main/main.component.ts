import { Component, OnInit } from '@angular/core';
import { appService } from '../app.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  users : User[] = new Array();

  constructor(public tService: appService) { }

  ngOnInit(): void {
    this.tService.downloadUsers().subscribe(res => {
      this.users = res;
    }) 
  }

}
