import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import StorageHelper from '../libs/helpers/storage.helper';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(public http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post('http://ec2-18-116-97-69.us-east-2.compute.amazonaws.com:4001/api/login',
      {
        username,   //no se coloca la llave porque tiene el mismo nombre
        password
      })
  }

  refreshToken() {
    return this.http.post('http://ec2-18-116-97-69.us-east-2.compute.amazonaws.com:4001/api/refresh',
      {
        session: StorageHelper.getItem('session')
      })
  }

  searchPokemon(name: string): Observable<any> {
    return this.http.post('http://ec2-18-116-97-69.us-east-2.compute.amazonaws.com:4001/mirror/pokemon',
      {
        "endpoint": `pokemon/${name}`
      })
  }

  searchDrink(name: string): Observable<any> {
    return this.http.post('http://ec2-18-116-97-69.us-east-2.compute.amazonaws.com:4001/mirror/drink',
      {
        "endpoint": `json/v1/1/search.php?s=${name}`
      })
  }


}
