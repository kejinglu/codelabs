import { Component, Input } from '@angular/core';//add Input
import { CommonModule } from '@angular/common';
import { HousingLocation } from "../housing-location"//add HousingLocation from interface
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation //add @Input, !: means won't be n ull or undef
}
