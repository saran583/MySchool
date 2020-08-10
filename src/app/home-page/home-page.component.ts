import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  navigate(){
    this.router.navigate(["/HomeWork"]);
  }
  navigate1(){
    this.router.navigate(["/Marks"]);
  }
  navigate2(){
    this.router.navigate(["/GoOnline"]);
  }
  navigate3(){
    this.router.navigate(["/Books"]);
  }
  navigate4(){
    this.router.navigate(["/TimeTable"]);
  }
  navigate5(){
    this.router.navigate(["/Attendance"]);
  }
  navigate6(){
    this.router.navigate(["/OnlineTest"]);
  }
  navigate7(){
    this.router.navigate(["/BookAppointment"]);
  }
  navigate8(){
    this.router.navigate(["/Fees"]);
  }
  navigate9(){
    this.router.navigate(["/Resources"]);
  }
  navigate10(){
    this.router.navigate(["/Dictionary"]);
  }
  navigate11(){
    this.router.navigate(["/Trackbus"]);
  }
  navigate12(){
    this.router.navigate(["/Events"]);
  }
  navigate13(){
    this.router.navigate(["/Gallery"]);
  }
  navigate14(){
    this.router.navigate(["/Remarks"]);
  }
}
