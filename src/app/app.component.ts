import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { User } from './common/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'coda-chlng';

  public filter: any;

  users: Array<any> = [];
  players: Array<any> = [];

  constructor(private userservice: UserService){

    this.users = new Array<any>();
    this.players = new Array<any>();
    
  }
  ngOnInit(): void {

    
  }

  Players(player: any) {

    this.players.push(player);
  }

  getData() {

    console.log("In app component");


    this.userservice.getProducts().subscribe(
      (data) => {
              console.log("subscribe " + data[0]["Profile Image"] + "\n");
              this.users = data;
      }
    );

    console.log("logging : " + this.users.length);

    for (let temp of this.users){
      console.log("app-component" + temp);
    }
  }
}
