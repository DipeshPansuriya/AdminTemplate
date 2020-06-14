import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login.component";
import { LoginRoutingModule } from "./login-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import {
  IgxIconModule,
  IgxInputGroupModule,
  IgxCheckboxModule,
  IgxButtonModule
} from "igniteui-angular";

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    HttpClientModule,
    IgxButtonModule,
    IgxIconModule,
    IgxCheckboxModule,
    IgxInputGroupModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: "never" })
  ],
  declarations: [LoginComponent]
})
export class LoginModule {}
