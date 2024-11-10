import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-products-new',
  templateUrl: './products-new.component.html',
  styleUrls: ['./products-new.component.scss']
})
export class ProductsNewComponent implements OnInit {

 
addProductForm : FormGroup;
  constructor(private commonService : CommonServiceService,
    private fb : FormBuilder
  ) { 
    this.addProductForm = this.fb.group({
      productName : new FormControl(''),
      productDesc : new FormControl(''),
      categoryControl : new FormControl('', Validators.required)
      // categoryValue : new FormControl('')

    })
  }

  get categoryControl(): FormControl {
    return this.addProductForm.get('categoryControl') as FormControl;
  }

  category = [
    { value: 'beauty', label: 'Beauty' },
    { value: 'Electronics', label: 'Electronics' },
    { value: 'Books', label: 'Books' },
    { value: 'Stationary', label: 'Stationary' },
    { value: 'Cosmetics', label: 'Cosmetics' },
    { value: 'Fashion', label: 'Fashion' }
  ];

  ngOnInit(): void {
   
  }

}
