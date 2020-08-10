import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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


const routes: Routes = [
  {path:"Login", component: LoginPageComponent},
  {path:"", component: HomePageComponent},
  {path:"HomeWork", component:HomeWorkPageComponent},
  {path:"Marks", component:MarksPageComponent},
  {path:"GoOnline", component:GoonlinePageComponent},
  {path:"TimeTable", component:TimetablePageComponent },
  {path:"Attendance", component:AttendancePageComponent},
  {path:"OnlineTest", component: OnlinetestPageComponent},
  {path:"BookAppointment", component:BookAppointmentPageComponent},
  {path:"Fees", component:FeesPageComponent},
  {path:"Resources", component:ResourcesPageComponent},
  {path:"Dictionary", component:DictionaryPageComponent},
  {path:"Trackbus", component:TrackbusPageComponent},
  {path:"Events", component: EventsPageComponent},
  {path:"Gallery", component:GalleryPageComponent},
  {path:"Remarks", component:RemarksPageComponent},
  {path:"Books", component:BooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
