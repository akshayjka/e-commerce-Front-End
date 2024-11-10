import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonServiceService } from 'src/app/services/common-service.service';
import { ProductsNewComponent } from './products-new/products-new.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  tableTitle :string = 'List of Products';

  columns = [
    { columnDef: 'productId', header: 'ID.' },
    { columnDef: 'name', header: 'Name' },
    { columnDef: 'description', header: 'Description' },
    { columnDef: 'price', header: 'price' },
    { columnDef: 'dateOfManufactured', header: 'Date Of Sale' }
  ];

  // displayedColumns = ['position', 'name', 'weight', 'symbol'];
  displayedColumns = this.columns.map(c => c.columnDef);

  // dataSource :new MatTableDataSource();

  dataSource : any;

  // Sample data for the table
  // dataSource = new MatTableDataSource([
  //   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  //   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  //   // Add more rows as needed
  // ]);

  constructor(private commonServcie : CommonServiceService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.commonServcie.getProductList().subscribe((prodList:any)=>{
      console.log("The list of Products that the seller has been published is : ",prodList);
      this.dataSource = [...prodList]
    })
  }

  addProduct() {
    
    const dialogRef = this.dialog.open(ProductsNewComponent, {
      width : '1000px',
      maxWidth : '90vw'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    console.log("The value is getting passed : ");

  }

 

}
