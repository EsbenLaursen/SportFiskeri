import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import {FishService} from './fish.service';
import { ToptoolbarComponent } from './toptoolbar/toptoolbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule, MdToolbarModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    ToptoolbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdToolbarModule
  ],
  providers: [FishService],
  bootstrap: [AppComponent]
})
export class AppModule { }
