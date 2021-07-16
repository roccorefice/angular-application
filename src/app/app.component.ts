import { Component } from '@angular/core';
import { appService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-app';
  user  : string = 'Nothing00';

  constructor(public tService: appService) {
    this.tService.userChanged$.subscribe(user => {
      this.user = user;
    });
    this.tService.changeUser(this.user);
  }
}
