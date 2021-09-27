import { Component, OnInit } from '@angular/core'; "@angular/core";

import { ProductService } from "./product.service";
import { IProduct } from "./products";

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  pageTitle: string = 'Skateboard List';
  imageWidth: number = 150;
  imageMargin: number = 2;
  showImage: boolean = true;

  constructor(private productService: ProductService) { }
  /*
  1. Declare a private backing variable to hold the value managed by the getter and setter.
  We use the underscore in front of the property name to denote it as a private variable and initialize it to an empty string.
  */
  private _listFilter: string = '';

  // 2. Next we define the getter and specify the property data type.
  get listFilter(): string {
    // 2.1 the body of the getter can include code to process the property value before returning it.

    // 2.2 the getter then returns the processed value.
    return this._listFilter;
  }

  // 3. The setter begins with the "set" keyword followed by the name of the property. The setter has a single parameter, which is the value assigned to the property. The setter is executed any time a value is assigned to the associated property.
  set listFilter(value: string) {
    //3.1 We can use the body of the setter to perform an operation when the property is changed.

    // 3.2 We set the value into our private backing variable.
    this._listFilter = value;
    // 3.3 We don't need to return a value.
    console.log('set listFilter', value);

    this.filteredProducts = this.performFilter(value);
  }

  //Once we filter the products array, we lose our original data and can't get it back without regetting the data from its source.
  filteredProducts: IProduct[] = [];
  skateboards: IProduct[] = [];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit() {
    console.log("JRI logging ngOnInit");
    this.skateboards  = this.productService.getProducts();
    this.filteredProducts = this.skateboards;
  }

  // takes in the listFilter which is a string. Returns the filtered array of products.
  performFilter(value: string): IProduct[] {
    //To lower is used to improve accuracy when comparing.
    value = value.toLowerCase();
    return this.skateboards.filter((product: IProduct) =>
      product.productName.toLowerCase().includes(value));
  }

  onNotify(message: string): void {
    console.log(`JRI Container Component logging child event and value: ${message}`)
    this.pageTitle = `Skateboard Rating: ${message}`;
  }
}
