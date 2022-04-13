import { Component, Input, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  // TO-DO servir información en un json, basarnos en una interface, y acceder mediante servicio
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
    },
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver
    // .observe(Breakpoints.Handset)
    .observe('(max-width: 768px)')
    .pipe(
      map((result) => {
        return result.matches;
      }),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) { }


}
