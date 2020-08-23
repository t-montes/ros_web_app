import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxRolesService, NgxPermissionsService } from 'ngx-permissions'


/**
 * The service provider for everything related to authentication
 */
@Injectable({
  providedIn: 'root'
}
)
export class AuthService {

  /**
   * Constructor of the service
   * @param router Angular's Router to redirect the user on login or logout
   * @param roleService NgxRolesService to manage authentication roles
   * @param permissionsService NgxPermissionsService to manage authentication permissions
   */
  constructor(private router: Router, private roleService: NgxRolesService, private permissionsService: NgxPermissionsService) { }

  start(): void {
    this.roleService.flushRoles();
    const role = localStorage.getItem('role');
    if (!role) {
      this.setGuestRole();
    } else if (role === 'ROVER') {
      this.setRoverRole();
    } else if (role === 'SUMBARINO') {
      this.setSubmarinoRole();
    }
    else if (role === 'LUNABOTICS') {
      this.setLunaboticsRole();
    }
  }

  setGuestRole(): void {
    this.roleService.flushRoles();
    this.roleService.addRole('GUEST', ['']);
  }

  setRoverRole(): void {
    this.roleService.flushRoles();
    this.roleService.addRole('ROVER', ['']);
    localStorage.setItem('role', 'ROVER');
  }

  setSubmarinoRole(): void {
    this.roleService.flushRoles();
    this.roleService.addRole('SUBMARINO', ['']);
    localStorage.setItem('role', 'SUBMARINO');
  }

  setLunaboticsRole(): void {
    this.roleService.flushRoles();
    this.roleService.addRole('LUNABOTICS', ['']);
    localStorage.setItem('role', 'LUNABOTICS');
  }


  printRole(): void {
    console.log(this.roleService.getRoles());
  }

  /**
   * Logs the user in with the desired role
   * @param role The desired role to set to the user
   */
  login(role): void {
    if (role === 'ROVER') {
      this.setRoverRole();
    } else if (role === 'SUBMARINO'){
      this.setSubmarinoRole()
    } else if (role === 'LUNABOTICS'){
      this.setLunaboticsRole()
    }
    this.router.navigateByUrl('/clients/list');
  }

  /**
   * Logs the user out
   */
  logout(): void {
    this.roleService.flushRoles();
    this.setGuestRole();
    localStorage.removeItem('role');
    this.router.navigateByUrl('/');
  }
}