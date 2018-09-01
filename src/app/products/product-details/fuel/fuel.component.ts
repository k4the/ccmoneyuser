import { Component, Input } from '@angular/core';
import { Fuel } from '../../fuel.model';

@Component({
  selector: 'app-fuel',
  templateUrl: './fuel.component.html',
  styleUrls: ['./fuel.component.scss']
})
export class FuelComponent {
  @Input('labels') labels: any;
  @Input('fuel') fuel: Fuel;
  @Input('type') type: string;

  constructor() { }
}
