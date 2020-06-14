import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BreadcrumbComponent } from "./components/breadcrumb/breadcrumb.component";
import { NavigationComponent } from "./components/header-navigation/navigation.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { SpinnerComponent } from "./components/spinner.component";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import {
    PerfectScrollbarModule,
    PerfectScrollbarConfigInterface,
    PERFECT_SCROLLBAR_CONFIG
} from "ngx-perfect-scrollbar";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true,
    wheelSpeed: 2,
    wheelPropagation: true
};

@NgModule({
    declarations: [
        BreadcrumbComponent,
        NavigationComponent,
        SidebarComponent,
        SpinnerComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        BrowserModule,
        HttpClientModule,
        RouterModule,
        PerfectScrollbarModule,
        NgbModule
    ],
    exports: [
        BreadcrumbComponent,
        NavigationComponent,
        SidebarComponent,
        SpinnerComponent
    ],
    providers: [
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }
    ]
})
export class TemplateModule {}
