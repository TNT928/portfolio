import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newPortfolio';
  opened: any;

  mobile: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.HandsetPortrait)


  constructor(private breakpointObserver: BreakpointObserver){}
}
