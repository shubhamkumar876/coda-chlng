import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../common/user';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/bets7747a43.json';

  constructor(private httpClient: HttpClient) { }

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
}

// interface getUser {
//   Name:string;
//   Bet:number;
//   Price:number;
//   //Profile Image: string;
// }


