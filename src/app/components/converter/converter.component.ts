import { Component } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css'],
})
export class ConverterComponent {
  amount: number = 0;
  convert: number = 0;

  currencyActual: string = 'MEX';
  currencyTransform: string = 'USD';

  coins = [
    { id: 'MEX', currency: 'MEX' },
    { id: 'USD', currency: 'USD' },
  ];

  transform(): void {
    switch (this.currencyActual) {
      case 'MEX':
        if (this.currencyTransform === 'USD') {
          this.convert = (this.amount * 0.056) as number;
        } else {
          this.convert = this.amount;
        }
        break;
      case 'USD':
        if (this.currencyTransform === 'MEX') {
          this.convert = (this.amount * 18.02) as number;
        } else {
          this.convert = this.amount;
        }
        break;
    }
  }
}
