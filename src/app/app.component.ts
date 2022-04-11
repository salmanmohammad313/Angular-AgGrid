import { Component } from '@angular/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  columnDefs = [
    { HeaderName: 'Make', field: 'make' },
    { HeaderName: 'Model', field: 'model' },
    { HeaderName: 'Price', field: 'price', editable: true }
  ];
  rowData = [];

  ngOnInit() {
    fetch('https://www.ag-grid.com/example-assets/row-data.json')
      .then(result => result.json())
      .then(rowData => this.rowData = rowData);
  }

  defaultColDef={
    sortable:true,
    filter:true,
  }
}
