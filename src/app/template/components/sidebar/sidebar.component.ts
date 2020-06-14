import { Component, OnInit } from "@angular/core";
import { ROUTES } from "./menu-items";

@Component({
    selector: "app-sidebar",
    templateUrl: "./sidebar.component.html"
})
export class SidebarComponent implements OnInit {
    showMenu = "";
    showSubMenu = "";
    public sidebarnavItems: any[];
    // this is for the open close
    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = "0";
        } else {
            this.showMenu = element;
        }
    }
    addActiveClass(element: any) {
        if (element === this.showSubMenu) {
            this.showSubMenu = "0";
        } else {
            this.showSubMenu = element;
        }
    }

    constructor() {}
    // End open close
    ngOnInit() {
        this.sidebarnavItems = ROUTES.filter(sidebarnavItem => sidebarnavItem);
    }
}
