import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.scss']
})
export class MainHomeComponent implements OnInit {

  isProduct:boolean = false;

  constructor(private route : Router) { }

  ngOnInit(): void {
    if(!localStorage.getItem("token")) {
      this.route.navigateByUrl('/register')
    }
  }

  test(event:any) {
    console.log("The event emitter is  printing Value : ", event)

    if(event === "product") {
      this.isProduct = true;
    }
    
  }

  isSidebarExpanded: boolean = true;

  toggleSidebar() {
    this.isSidebarExpanded = !this.isSidebarExpanded;
  }

}
