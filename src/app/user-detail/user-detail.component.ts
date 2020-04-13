import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: any;
  messages: any;
  receiver: number;

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.receiver = this.route.snapshot.params['id'];

    this.rest.getUser(this.receiver)
      .subscribe((data: {}) => {
        this.user = data;
      });
    
    this.rest.getMessages(this.receiver)
      .subscribe((result: {}) => {
        this.messages = result;
      });
  }

}
