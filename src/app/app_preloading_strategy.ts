import { PreloadingStrategy, Route } from '@angular/router';

//import { Observable } from 'rxjs';
import { Observable} from 'rxjs/Rx';
import { timer } from 'rxjs/observable/timer';

import { of } from 'rxjs/observable/of';
//import { Observable, of } from 'rxjs';
//import 'rxjs/add/operator/mergeMap';
import { mergeMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class AppPreloadingStrategy implements PreloadingStrategy {
    /*preload(route: Route, load: Function): Observable<any> {
        const loadRoute = (delay) => delay
            ? timer(150).pipe(mergeMap(_ => load()))
            : load();
        return route.data && route.data.preload
            ? loadRoute(route.data.delay)
            : of(null);
    }*/
    preload(route: Route, load: () => Observable<any>): Observable<any> {
        if (route.data && route.data['preload']) {
          console.log('Preload Path: ' + route.path);
          return load();
        } else {
          return Observable.of(null);
        }
      }
}
