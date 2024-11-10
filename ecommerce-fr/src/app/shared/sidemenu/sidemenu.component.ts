import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from '../Interfaces/interfaces';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

  @Output() selectedMenu =new EventEmitter();

  @Output() toggleExpanded = new EventEmitter<void>();

  item:any;

  activeRoute: string = ''; // Track current active route

  constructor(private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activeRoute = this.router.url;
  }

  isExpanded = false;
  expandedItem: MenuItem | null = null; // Track which item is expanded

  menuItems: MenuItem[] = [
    { label: 'Dashboard', icon: 'dashboard', route:'dashboard' },
    { label: 'Settings', icon: 'settings', route:'setting'},
    { label: 'Profile', icon: 'person' , route:'profile'},
    { label: 'MyShop', icon: 'message' ,
      subItems: [
        { label: 'Products', icon: 'category', route:'product'},
        { label: 'Orders', icon: 'shopping_cart', route:'order' },
        { label: 'Customers', icon: 'people', route:'customer' },
      ]
    },
  ];

  toggleExpand(item: MenuItem) {
    this.isExpanded = true;
    // this.isExpanded != this.isExpanded;
    this.expandedItem = this.expandedItem === item ? null : item;
    this.item = item;
    if(item.route) {
      this.activeRoute = item.route;
      this.selectedMenu.emit(item.route);
    }
    console.log("The selected Item : ", item);
  }

  // submenu selection route
  toggleExpandsubMenu(submenu:MenuItem) {
    console.log("After selecting the sub menu", submenu);
    // this.router.navigate([submenu.route], { relativeTo: this.route });
    if(submenu.route) {
      this.activeRoute = submenu.route;
      this.selectedMenu.emit(submenu.route);
    }

  }

  isActiveRoute(route: string | undefined): boolean {
    // return route ? true : false;
    return this.router.url === route;
  }


  toggle() {
    this.isExpanded = false;
  }

}
