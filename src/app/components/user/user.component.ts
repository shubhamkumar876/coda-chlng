import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  title = 'coda-chlng';


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
