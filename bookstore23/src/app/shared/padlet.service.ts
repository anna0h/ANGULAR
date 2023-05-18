import { Injectable } from '@angular/core';
import {Padlet, User} from "./padlet";
import {Entrie} from "./entrie";
import {catchError, Observable, retry, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PadletService {
  private api = 'http://padlet.s2010456013.student.kwmhgb.at/api';
  constructor(private http: HttpClient) {}

  getAllPadlets(): Observable<Array<Padlet>>{
    return this.http.get<Array<Padlet>>(`${this.api}/padlets`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  getSinglePadlet(id:number) : Observable<Padlet>{
    return this.http.get<Padlet>(`${this.api}/padlets/findByID/${id}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  getAllEntries(id:number) : Observable<Entrie[]>{
    return this.http.get<Entrie[]>(`${this.api}/padlets/${id}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  private errorHandler(error: Error | any): Observable<any> {
    return throwError(error);
  }

  /*padlets: Padlet[];
  entries: Entrie[];

  constructor() {
    this.padlets = [
      new Padlet(1, false,
        new User(1, 'Anna', 'Hornbachner', 'anna@test.com', 'secret', 'url'),
        'Padlet 1'),
      new Padlet(2, true,
        new User(2, 'fN2', 'lN2', 'user2@test.com', 'secret', 'url'),
        'Padlet 2')
    ]

    this.entries = [
      new Entrie( 1,
        new User(3, "fN3", "lN3", "user3@test.com","secret", "url"), 1,
        "Entrie 1", "Content von Entrie"),
      new Entrie( 2,
        new User(4, "fN3", "lN3", "user3@test.com","secret", "url"),
        2,"Entrie 2", "Content von Entrie")
    ]
  }

  getAllPadlets(){
    return this.padlets;
  }

  getSinglePadlet(id:number) : Padlet {
    return <Padlet>this.padlets.find(padlet=> padlet.id == id);
  }

  getAllEntries(id:number) : Entrie[]{
    return <Array<Entrie>>this.entries.filter(entrie=>entrie.padlet_id == id);
  }*/
}
