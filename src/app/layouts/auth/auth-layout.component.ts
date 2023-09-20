import { Component, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { PagesnavbarComponent } from '../../shared/pagesnavbar/pagesnavbar.component';
import { filter, Subscription } from 'rxjs';

declare var $: any;

@Component({
    selector: 'app-layout',
    templateUrl: './auth-layout.component.html'
})

export class AuthLayoutComponent {
    location: Location;
    private _router: Subscription;
    // url: string;

    @ViewChild(PagesnavbarComponent) pagesnavbar: PagesnavbarComponent;
    constructor( private router: Router, location:Location ) {
      this.location = location;
    }

    ngOnInit() {
        this._router = this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
        //   this.url = event.url;
          this.pagesnavbar.sidebarClose();
        });
    }
}
