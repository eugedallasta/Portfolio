import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {

  sections = [
    {
      id: 'about',
      title: 'About',
    },
    {
      id: 'experience',
      title: 'Experience',
    },
    {
      id: 'work',
      title: 'Work',
    },
    {
      id: 'contact',
      title: 'Contact',
    }
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => {
        console.log('matches:', result.matches);
        console.log('breakpoints:', result.breakpoints);
        console.log('breakpoints:', result.breakpoints);
        return result.matches;
      }),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) { }
}
