import { Component } from '@angular/core';
import { RestService } from './rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'golfweb-front';
  userId: number = 0;
  allUsers: any;
  user: any;

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.rest.getUsers().subscribe((data: {}) => {
      this.allUsers = data;
    });
  }

  add() {
    this.router.navigate(['/user-add']);
  }

  details(id: number) {
    this.router.navigate(['/user-details', id]);
  }

  edit(id: number) {
    this.router.navigate(['/user-edit', id]);
  }

  delete(id: number) {
    this.rest.deleteUser(id)
      .subscribe(res => {
        this.getAllUsers();
      }, (err) => {
        console.log(err);
      });
  }
}
