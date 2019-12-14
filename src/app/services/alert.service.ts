import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { getMatScrollStrategyAlreadyAttachedError } from '@angular/cdk/overlay/typings/scroll/scroll-strategy';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private subject = new Subject<any>();
  private keepAfterRouteChange = false;
  
  constructor(private router: Router) {
    // clear alert masseges on route change unless 'keepAfterRouteChange' flag is true
     this.router.events.subscribe(event => {
        if (event instanceof NavigationStart){
            if (this.keepAfterRouteChange){
              //only keep for a single rout change
              this.keepAfterRouteChange = false;
          }else {
            //clear alert message
            this.clear();
          }
        }
     });
    }
     getAlert(): Observable<any> {
       return this.subject.asObservable();
     }

     success(message: string, keepAfterRouteChange = false) {
       this.keepAfterRouteChange = keepAfterRouteChange;
       this.subject.next({type: 'success', text: message });
     }

     error(message: string, keepAfterRouteChange = false){
       this.keepAfterRouteChange = keepAfterRouteChange;
       this.subject.next({type: 'error', text: message});
     }

     clear(){
       // clear by calling subject.next() without parameters
       this.subject.next();
     }
   }

