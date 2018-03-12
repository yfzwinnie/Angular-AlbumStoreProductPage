import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-tracklisting',
  templateUrl: './product-tracklisting.component.html',
  styleUrls: ['./product-tracklisting.component.css']
})
export class ProductTracklistingComponent implements OnInit {

  albumInfo: Album;

  constructor(private _productService) { }

  ngOnInit() {
    this._productService.getAlbum(1).subsribe(response => this.albumInfo = response);
  }

}
