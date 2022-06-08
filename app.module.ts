import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { InsertComponent } from './insert/insert.component';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './update/update.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    InsertComponent,
    UpdateComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
