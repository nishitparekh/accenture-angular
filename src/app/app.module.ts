import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipe/flag.pipe';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MailListingComponent } from './mail-listing/mail-listing.component';
import { RightPaneComponent } from './right-pane/right-pane.component';

@NgModule({
  declarations: [
    FilterPipe,
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    MailListingComponent,
    RightPaneComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
