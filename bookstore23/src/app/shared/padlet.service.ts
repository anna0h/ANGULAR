import { Injectable } from '@angular/core';
import {Padlet, User} from "./padlet";
import {Entrie} from "./entrie";
import {catchError, Observable, retry, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Rating} from "./rating";
import {Comment} from "./comment";

@Injectable({
  providedIn: 'root'
})
export class PadletService {
  private api = 'http://padlet.s2010456013.student.kwmhgb.at/api';
  constructor(private http: HttpClient) {}

  //------ delete, update, create Padlet  -------------
  createPadlet(padlet: Padlet): Observable<any> {
    return this.http.post(`${this.api}/padlets`, padlet)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  updatePadlet(padlet: Padlet): Observable<any> {
    return this.http.put(`${this.api}/padlets/${padlet.id}`, padlet)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  removePadlet(id: number): Observable<any> {
    return this.http.delete(`${this.api}/padlets/${id}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  //------ delete, update, create Entrie  -------------
  createEntrie(id:number, entrie: Entrie): Observable<any>{
    return this.http.post(`${this.api}/padlets/${id}/entries`, entrie)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  updateEntrie(entrie:Entrie):Observable<any>{
    return this.http.put(`${this.api}/entries/${entrie.id}`, entrie)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  removeEntrie(id: number): Observable<any> {
    return this.http.delete(`${this.api}/entries/${id}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }


  //------ für Ausgabe -------------

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

  getSingleEntrie(padlet_id:number, entrie_id: number) : Observable<Entrie>{
    return this.http.get<Entrie>(`${this.api}/padlets/${padlet_id}/entries/${entrie_id}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  getEntryById(id:number):Observable<Entrie>{
    return this.http.get<Entrie>(`${this.api}/entries/${id}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  getUser() : Observable<User[]>{
    return this.http.get<User>(`${this.api}/padlets`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  getUserById(id: number) : Observable<User>{
    return this.http.get<User>(`${this.api}/users/${id}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  getRatingsForEntrie(id: number) : Observable<Array<Rating>> {
    return this.http.get<Array<Rating>>(`${this.api}/entries/${id}/ratings`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  getCommentsForEntrie(id: number) : Observable<Array<Comment>> {
    return this.http.get<Array<Comment>>(`${this.api}/entries/${id}/comments`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  private errorHandler(error: Error | any): Observable<any> {
    return throwError(error);
  }

}
