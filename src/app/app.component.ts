import { DatePipe, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemperaturePipe } from "./temperature.pipe";
import { SortPipe } from './sort.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatePipe, DecimalPipe, TemperaturePipe, SortPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public currentDate = new Date();
  public currentTemperatures = {
    berlin: 4.2749812,
    newYork: 18.1214,
    paris: 72.1209001,
    chicago: 65.0775238,
  };

  public historicTemperatures = [
    25, 37, 19, -4, 28, 21, 19, 28, 33, 31, 9, 11, 5, -12, -5,
  ];

  // constructor() {
  //   this.historicTemperatures.sort((a, b) => a > b ? 1 : -1);
  // }

  public onReset(index: number) {
    // this.historicTemperatures[index] = 18;
    const newTemperatures = [...this.historicTemperatures];
    newTemperatures[index] = 18;
    this.historicTemperatures = newTemperatures;

  }
}
