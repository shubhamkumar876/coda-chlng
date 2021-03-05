import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../common/user';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/bets7747a43.json';

  players: Array<any> = [];

  constructor(private httpClient: HttpClient,
              private router:Router) { 
    this.players = JSON.parse(sessionStorage.getItem('players')!) != null ? JSON.parse(sessionStorage.getItem('players')!):[];
  }

   getProducts():Observable<any> {

    console.log("service call : " + this.httpClient.get(this.url));

     return this.httpClient.get<any>(this.url);
    
    // return this.httpClient.get<getUser>(this.url).pipe(
    //   map(
    //     response => {
    //                 console.log("response: " + response + "JSON:=>" +JSON.stringify(response));
    //                  return response.users;
    //   })
    // );
    
  }

  storing(){
    sessionStorage.setItem('players', JSON.stringify(this.players));
  }

  addToPlayer(thePlayers:any){

      this.players.push(thePlayers);
      this.storing();
      
  }

  remove(thePlayer: any) {
    
    // get the index of item in the array
    const itemIndex = this.players.findIndex(temp => temp.Name == thePlayer.Name);

    // if found, remove the item from the array at the given index
    if (itemIndex > -1) {

      this.players.splice(itemIndex, 1);
      this.storing();
    }
  }

  reset(){
    this.players = [];
    sessionStorage.clear();
    this.router.navigateByUrl('/result');
  }
}

// interface getUser {
//   Name:string;
//   Bet:number;
//   Price:number;
//   //Profile Image: string;
// }


