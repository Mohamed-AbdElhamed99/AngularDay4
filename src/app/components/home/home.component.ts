import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { ProductssliderComponent } from "./productsslider/productsslider.component";
import { SliderComponent } from "./slider/slider.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent, ProductssliderComponent, SliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
