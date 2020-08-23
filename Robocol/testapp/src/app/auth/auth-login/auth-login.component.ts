import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../auth.service';
import { User } from '../user';


@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})

export class AuthLoginComponent implements OnInit {
  userForm: FormGroup;

  user: User;
  roles: string[];
  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private authService: AuthService,
  ) {

  }
  login(user): void {
    this.authService.login(user.role);
    this.toastrService.success('Successfully login')
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required]],
      role: ['ROVER', [Validators.required]],
    });
    this.user = new User();
    this.roles = ['ROVER', 'SUBMARINO', 'LUNABOTICS'];
  }
}
