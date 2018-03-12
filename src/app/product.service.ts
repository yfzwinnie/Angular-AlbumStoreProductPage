import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'; //import this to use the map function
import { Album } from './album';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json'; //creating private class property

  constructor(private _http: Http) { } //injecting an instance of a http service into the ProductService class.

  getAlbum(id: number): Observable<Album> {
    return this._http.get(this._albumUrl).map((response) => <Album>response.json()); 
  }

}
