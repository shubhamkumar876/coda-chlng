import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  title = 'coda-chlng';

  p:number = 1;

  users: Array<any> = [];
  players: Array<any> = [];


  public filter: any = this.appcomponent.filter;

  constructor(private userservice: UserService,
              public appcomponent:AppComponent){

    this.users = new Array<any>();
   this.players = new Array<any>();

   
    
  }
  ngOnInit(): void {

    this.getData();
  }

  Players(player: any) {

    this.players.push(player);

    const selectedPlayers = player;

  this.userservice.addToPlayer(selectedPlayers);
    
  }

  key: string = 'Name'; 
  reverse: boolean = false;
  sort(key:any){
    this.key = key;
    this.reverse = !this.reverse;
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
