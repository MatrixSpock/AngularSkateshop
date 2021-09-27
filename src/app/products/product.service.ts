import { Injectable } from '@angular/core';
import { IProduct } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts(): IProduct[]{
    return [
      {
        'productId': 1,
        'productName': 'Baker Red',
        'productCode': 'GDN-0011',
        'releaseDate': 'March 19, 2021',
        'description': 'Leaf rake with 48-inch wooden handle.',
        'price': 19.95,
        'starRating': 3.2,
        'imageUrl': 'assets/images/skateboards/baker_red.jpg',
      },
      {
        'productId': 2,
        'productName': 'Baker Spanky',
        'productCode': 'GDN-0023',
        'releaseDate': 'March 18, 2021',
        'description': '15 gallon capacity rolling garden cart',
        'price': 32.99,
        'starRating': 4.2,
        'imageUrl': 'assets/images/skateboards/baker_spanky.jpg'
      },
      {
        'productId': 5,
        'productName': 'Blind OG Reaper',
        'productCode': 'TBX-0048',
        'releaseDate': 'May 21, 2021',
        'description': 'Curved claw steel hammer',
        'price': 8.9,
        'starRating': 4.8,
        'imageUrl': 'assets/images/skateboards/Blind-OG-Reaper-Logo-8.0_-Skateboard-Deck--_299301-front-US.jpg'
      },
      {
        'productId': 10,
        'productName': 'Blind Switch Blade',
        'productCode': 'GMG-0042',
        'releaseDate': 'October 15, 2020',
        'description': 'Standard two-button video game controller',
        'price': 35.95,
        'starRating': 4.6,
        'imageUrl': 'assets/images/skateboards/Blind_Switch_Blade_8.5.jpg'
      },
      {
        'productId': 10,
        'productName': 'Primitive Gold Pack',
        'productCode': 'GMG-0042',
        'releaseDate': 'October 15, 2020',
        'description': 'Standard two-button video game controller',
        'price': 35.95,
        'starRating': 4.6,
        'imageUrl': 'assets/images/skateboards/Primitive-Gold-Pack-PRod-Imperial-8.25_-Skateboard-Deck-_350691-front-US.jpg'
      },
      {
        'productId': 10,
        'productName': 'Enjoi WWE Deez',
        'productCode': 'GMG-0042',
        'releaseDate': 'October 15, 2020',
        'description': 'Standard two-button video game controller',
        'price': 35.95,
        'starRating': 4.6,
        'imageUrl': 'assets/images/skateboards/Enjoi-x-WWE-Deedz-Body-Slam-8.38_-Skateboard-Deck-_343647-front-US.jpg'
      },
      {
        'productId': 10,
        'productName': 'Dragon Ball - Goku',
        'productCode': 'GMG-0042',
        'releaseDate': 'October 15, 2020',
        'description': 'Standard two-button video game controller',
        'price': 35.95,
        'starRating': 4.6,
        'imageUrl': 'assets/images/skateboards/dragonball_deck.jpg'
      },
      {
        'productId': 10,
        'productName': 'Blind Crazy Horse',
        'productCode': 'GMG-0042',
        'releaseDate': 'October 15, 2020',
        'description': 'Standard two-button video game controller',
        'price': 35.95,
        'starRating': 4.6,
        'imageUrl': 'assets/images/skateboards/Blind_Crazy_Horse_8.25.Skateboard.jpg'
      }
    ]
  }
}
