import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from './homemodule/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule }    from '@angular/common/http';
import { GameComponent } from './game-component/game-component.component';
import { CardComponent } from './card/card.component';
import { JoinroomComponent } from './joinroom/joinroom.component';
import { CreateRoomComponent } from './roompopup/roompopup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent,
    CardComponent,
    JoinroomComponent,
    CreateRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
