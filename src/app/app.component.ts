import { Component, OnInit } from '@angular/core';

import { ClientService } from './service';
import { Client } from './model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  clients: Array<Client> = [];
  selectedClient: Client = new Client();
  keyword = '';

  constructor(
    private clientService: ClientService
  ) {}

  ngOnInit() {
    this.getClients();
  }

  private getClients(): void {
    this.clientService.getClients().subscribe((res) => {
      this.clients = [];
      res.data.forEach((client: Client) => {
        this.clients.push(client);
      });
    });
  }

  onSelectClient(client: Client, index: number): void {
    this.selectedClient = client;
  }
}
