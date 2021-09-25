import { Component } from "@angular/core";

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  pageTitle: string = 'Skateboard List';
  imageWidth: number = 150;
  imageMargin: number = 2;
  showImage: boolean = false;
  skateboards: any[] = [
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

}
