import { Component, OnInit, Output } from '@angular/core';
import { ProductService } from 'app/product.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  @Output() albumInfo;

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this._productService.getAlbum(1).subscribe(response => {
      console.log('this is the response');
      console.log(response);
      this.albumInfo = response;
    });
  }
}
