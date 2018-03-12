import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service'; //import service in order to use it

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  albumInfo; //creating an albumInfo property within the class to be used below

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getAlbum(1).subscribe(response => this.albumInfo = response) //kicks off the http request and stores the response in the class variable name albumInfo
  }

}
