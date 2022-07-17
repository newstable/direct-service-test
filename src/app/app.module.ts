import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryClientService }     from 'app/in-memory-service';

import { AppComponent } from './app.component';

import { ClientService } from './service';
import { ClientPipe } from './pipe/client.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ClientPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryClientService)
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
