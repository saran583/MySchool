import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeWorkPageComponent } from './home-work-page/home-work-page.component';
import { MarksPageComponent } from './marks-page/marks-page.component';
import { GoonlinePageComponent } from './goonline-page/goonline-page.component';
import { TimetablePageComponent } from './timetable-page/timetable-page.component';
import { AttendancePageComponent } from './attendance-page/attendance-page.component';
import { OnlinetestPageComponent } from './onlinetest-page/onlinetest-page.component';
import { BookAppointmentPageComponent } from './book-appointment-page/book-appointment-page.component';
import { FeesPageComponent } from './fees-page/fees-page.component';
import { ResourcesPageComponent } from './resources-page/resources-page.component';
import { DictionaryPageComponent } from './dictionary-page/dictionary-page.component';
import { TrackbusPageComponent } from './trackbus-page/trackbus-page.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { RemarksPageComponent } from './remarks-page/remarks-page.component';
import { BooksComponent } from './books/books.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    HomeWorkPageComponent,
    MarksPageComponent,
    GoonlinePageComponent,
    TimetablePageComponent,
    AttendancePageComponent,
    OnlinetestPageComponent,
    BookAppointmentPageComponent,
    FeesPageComponent,
    ResourcesPageComponent,
    DictionaryPageComponent,
    TrackbusPageComponent,
    EventsPageComponent,
    GalleryPageComponent,
    RemarksPageComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
