import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FullComponent } from "./layouts/full/full.component";
import { BlankComponent } from "./layouts/blank/blank.component";
import { HttpClientModule } from "@angular/common/http";
import { TemplateModule } from "./template/template.module";
import { AuthGuard } from "./auth.guard";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { Approutes } from "./app-routing.module";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [AppComponent, FullComponent, BlankComponent],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        TemplateModule,
        BrowserAnimationsModule,
        HttpClientModule,
        PerfectScrollbarModule,
        NgbModule.forRoot(),
        RouterModule.forRoot(Approutes)
    ],
    providers: [AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {}
