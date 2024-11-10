import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table-v1',
  templateUrl: './table-v1.component.html',
  styleUrls: ['./table-v1.component.scss']
})
export class TableV1Component implements OnInit {

  // @Input() columns: { columnDef: string; header: string }[] = [];
  // @Input() dataSource: any[] = [];
  // @Input() displayedColumns: string[] = [];

  @Input() headerButton:boolean = false;
  @Input() title:string = 'List';
  @Input() columns: any[] = [];
  @Input() dataSource = new MatTableDataSource<any>();
  @Input() displayedColumns: string[] = [];

  @Output() addButtonClick = new EventEmitter<void>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() { }

  ngOnChanges() {
    // this.displayedColumns = this.columns.map(c => c.columnDef);
    this.dataSource.paginator = this.paginator;
  }

  addProduct() {
    this.addButtonClick.emit();
    // Logic for adding a new product, e.g., open a dialog or navigate to a form
  }
  

  ngOnInit(): void {
  }

}
