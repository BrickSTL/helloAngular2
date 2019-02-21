import { Component } from '@angular/core';
import { User } from './user.model';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  time = 0;
  // User Model Template to house API data
  users$ : User

  constructor(private dataService: DataService){
    // simple JS Counter that add 1 to time every 1000 milliseconds
    setInterval(() => {
      this.time++
    }, 1000)
  };
  // API call using dataService and subscribing user data, executed upon ngClick event
  ngClick(){
    return this.dataService.getUser()
    .subscribe(data =>  this.users$ = data)
  }

}
