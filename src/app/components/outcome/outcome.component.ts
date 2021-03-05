import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-outcome',
  templateUrl: './outcome.component.html',
  styleUrls: ['./outcome.component.css']
})
export class OutcomeComponent implements OnInit {

  selectedPlayers: Array<any> = [];

  winBet:number = Math.floor(Math.random() * (9 - 1 + 1)) + 1;

  constructor(public userService:UserService) { 

  }

  ngOnInit(): void {

    this.selectedPlayers = this.userService.players;

    this.userService.storing();

    this.winBet = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
    console.log("winBet = " + this.winBet);

    console.log(" outcome page  / " + this.selectedPlayers.length);
    
  }

}
