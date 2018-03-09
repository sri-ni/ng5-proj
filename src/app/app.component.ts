import {Component, ViewChild} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('formRef') formEx;

  title = 'Angular 5 Sandbox';
  username = 'Srini';

  onSubmit(formVal) {
    console.log(formVal);
  }

  ngAfterViewInit() {
    this.formEx.valueChanges
      .subscribe(v => console.log(v));

    this.formEx.statusChanges
      .subscribe(v => console.log(v));

    Observable.combineLatest(
      this.formEx.statusChanges,
      this.formEx.valueChanges,
      (status, value) => ({status, value})
    )
      .filter(({status}) => status === 'VALID')
      .subscribe(({value}) => console.table(value));
  }
}
