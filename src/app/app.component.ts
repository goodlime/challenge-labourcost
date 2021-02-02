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

  columns = [
    {
      name: 'Payroll Provider',
      headerClass: 'tableHeader',
      prop: 'name'
    },
    {
      name: 'Worker',
      headerClass: 'tableHeader',
      prop: 'workerCount'
    },
    {
      name: 'Compliance Score',
      headerClass: 'tableHeader',
      prop: 'complianceStats'
    },
    {
      name: 'Gross Pay (&pound;)',
      headerClass: 'tableHeader',
      prop: 'grossPayTotal',
      pipe: this.pennysToPounds
    },
    {
      name: 'Payroll Admin (&pound;)',
      headerClass: 'tableHeader',
      prop: 'payrollAdminTotal'
    },
    {
      name: 'Labour Cost (&pound;)',
      headerClass: 'tableHeader',
      prop: 'labourCostTotal',
      pipe: this.pennysToPounds
    },
    {
      name: 'Workforce',
      headerClass: 'tableHeader',
      prop: null
    }
  ];

  ColumnMode = 'standard';
  SortType = 'single';

  constructor(
    private api: ApiService,
    private pennysToPounds: PennysToPoundsPipe
  ) {}

  ngOnInit(): void {
    this.api.getData()
      .subscribe(response => {
        this.tableData = response[0].providers;
        console.log('response', response);
      });
  }
}
