import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  items: number[] = Array(100);
  constructor() { }

  onIonInfinite(event: any) {
    console.log('se ejecuto el infinite', event);
    this.items.push(...Array(100));
  }

}
