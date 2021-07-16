import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  title: string;
  user ! : User;

  constructor(public route: ActivatedRoute) {
    this.title = this.route.snapshot.paramMap.get('id')!;

   }

  ngOnInit(): void {
  }

}
