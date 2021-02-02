import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ApiService } from './services/api.service';
import { PennysToPoundsPipe } from './pipes/pennys-to-pounds.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  tableData = [];

  constructor(
    private api: ApiService
  ) {}

  ngOnInit(): void {
    this.api.getData()
      .subscribe(response => {
        this.tableData = response[0].providers;
        console.log('response', response);
      });
  }
}
