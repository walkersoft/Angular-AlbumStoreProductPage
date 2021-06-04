import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/product.service';
import { Album } from '../album';

@Component({
  selector: 'app-product-tracklisting',
  templateUrl: './product-tracklisting.component.html',
  styleUrls: ['./product-tracklisting.component.css']
})
export class ProductTracklistingComponent implements OnInit {
  albumInfo: Album;

  constructor(private service: ProductService) { }

  ngOnInit() {
    this.service.getAlbum(1).subscribe(r => this.albumInfo = r);
  }

}
