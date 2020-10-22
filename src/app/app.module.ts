import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlecheupComponent } from './flecheup/flecheup.component';
import { ComparateurComponent } from './comparateur/comparateur.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { DataService } from './data.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FlecheupComponent,
    ComparateurComponent,
    ButtonsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
