import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy{

  public titulo: string
  public subscriber$: Subscription
  constructor(private router: Router) {
    this.subscriber$ = this.getArgumentosRuta().subscribe( data => {
      
      this.titulo = data.titulo
      document.title = `AdminPro - ${this.titulo}`
      
    })
  }
  ngOnDestroy(): void {
    this.subscriber$.unsubscribe()
  }

  getArgumentosRuta(){
    return this.router.events
    .pipe(
      filter(value => value instanceof ActivationEnd),
      filter((value : ActivationEnd) => value.snapshot.firstChild == null),
      map( (value: ActivationEnd) => value.snapshot.data)
    )
    
  }

}
