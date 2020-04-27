import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-lib',
  template: `
    <p>
      Bala library is working !!!!!
    </p>
  `,
  styles: []
})
export class MyLibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
