import { Component, OnInit } from "@angular/core";
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
  }

  skateboards: IProduct[] = [
    {
      "productId": 2,
      "productName": "Blind - Switch Blade",
      "productCode": "BLD-001",
      "releaseDate": "March 18, 2021",
      "price": 69.90,
      "description": "7.2 wide, super sick skating deck.",
      "starRating": 4.2,
      "imageUrl": "assets/images/Skateboard Decks/Blind-Switch-Blade-8.5_-Skateboard-Deck--_312720-front-US.jpg"
    },
    {
      "productId": 5,
      "productName": "Blind - Reaper OG",
      "productCode": "BLD-002",
      "releaseDate": "March 23, 2021",
      "price": 79.90,
      "description": "7.2 wide, super sick skating deck.",
      "starRating": 4.9,
      "imageUrl": "assets/images/Skateboard Decks/Blind-OG-Reaper-Logo-8.0_-Skateboard-Deck--_299301-front-US.jpg"
    }
  ];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit() {
    console.log("JRI logging ngOnInit");
    this.listFilter = "Blind";
  }

}
