import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class ClientService {

  constructor(
    private http: Http
  ) { }

  getClients() {
    return this.http.get('api/clients').map(x => x.json())
  }

}
