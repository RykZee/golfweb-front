import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const endpoint = 'http://localhost:8080/userapi/users/';

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

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get(endpoint)
      .subscribe((response) => {
        this.allUsers = response;
      });
  }

  details(id: number) {
    this.http.get(endpoint + id)
      .subscribe((response) => {
        console.log(response);
      });
  }

  edit(id: number) {

  }

  delete(id: number) {

  }
}
