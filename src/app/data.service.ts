import { Injectable } from '@angular/core';
import { Ordinateur } from './ordinateur';
import { Observable, of, BehaviorSubject, from, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  selection: BehaviorSubject<Ordinateur[]> = new BehaviorSubject<Ordinateur[]>([]);
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  private URL = 'http://localhost:3000/ordinateurs';

  constructor(private httpClient: HttpClient) { }

  getOrdis(): Observable<any> {
    return this.httpClient.get<Ordinateur[]>(this.URL);
  }
  getSelection(): Observable<any> {
    return this.getOrdis().pipe(
      map(result =>
          result.filter(ordinateur => ordinateur.isSelected)
    ));
  }

  updateOrdi(o: Ordinateur, id: number): Observable<any> {
    return this.httpClient.put<Ordinateur>(this.URL + '/' + id, o, this.httpOptions);
  }
}
