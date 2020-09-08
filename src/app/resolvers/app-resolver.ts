import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

import { ResolverService } from "./resolver-service.service";

@Injectable({
  providedIn: 'root'
})
export class RouteResolver implements Resolve<any>{

  constructor(private service: ResolverService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(`
        ROUTE RESOLVER:
        Route: ${route}
        State: ${state}
    `);
    this.service.getPosts().subscribe(x => console.log('x :>> ', x));
  }
}
