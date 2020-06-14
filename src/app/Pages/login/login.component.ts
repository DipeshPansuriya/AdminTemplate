import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  private _unsubscribeAll: Subject<any>;
  loginForm: FormGroup;

  constructor(
    public http: HttpClient,
    private _router: Router,
    private _formBuilder: FormBuilder
  ) {
    localStorage.removeItem("isLoggedin");
    localStorage.clear();
  }

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      LoginName: ["", [Validators.required]],
      Password: ["", Validators.required]
    });
  }

  formsetup() {
    const _builder = new FormBuilder();
    this.loginForm = _builder.group({});
    this.loginForm.addControl(
      "LoginName",
      new FormControl({ value: "" }, [Validators.required])
    );
    this.loginForm.addControl(
      "Password",
      new FormControl({ value: "" }, [Validators.required])
    );
  }

  submitForm() {
    // this.submittingForm = true;
    localStorage.setItem("isLoggedin", "true");
    this._router.navigate(["/home"]);
    // this._notification.success('Login Success');
  }

  login(form: any) {
    this.loginForm.markAllAsTouched();
    if (form.valid) {
      // this.RequestUrl = 'api/Core/UpSert_Continent';
      this._router.navigate(["/home"]);
    } else {
      alert("Invalid details");
    }
  }
}
