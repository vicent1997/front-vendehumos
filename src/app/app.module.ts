import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainViewComponent } from './main-view/main-view.component';
import { VendehumosListComponent } from './vendehumos-list/vendehumos-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { VendehumosDetailComponent } from './vendehumos-detail/vendehumos-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    VendehumosListComponent,
    SearchBarComponent,
    VendehumosDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
