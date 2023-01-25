import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { delay, startWith, Subscription } from 'rxjs';
import { Helpers } from '../helpers/helpers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  subscription:Subscription;
  authentication:boolean;
  title = 'angular15-app';

  constructor(private helpers:Helpers){}

  ngAfterViewInit(): void {
  this.subscription=this.helpers.isAuthenticationChanged().pipe(
    startWith(this.helpers.isAuthenticated()),
    delay(0)).subscribe((value:any)=>{
      this.authentication=value;
    });
  
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
