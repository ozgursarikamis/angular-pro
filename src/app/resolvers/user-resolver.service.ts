import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

import { UsersService } from "../users/users.service";
import { of } from 'rxjs';
import { map, catchError } from "rxjs/operators";

@Injectable()
export class UserResolverService implements Resolve<any> {

  constructor(private userService: UsersService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.userService.getUsers().pipe(
      catchError((err: any) => {
        console.error(err);
        return of('No Data');
      })
    );
  }

}
