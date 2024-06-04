import { Component } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  constructor(public calculatorService: CalculatorService) {}

  get display(): string {
    return this.calculatorService.getCurrentNumber();
  }

  public onNumberClick(number: string): void {
    this.calculatorService.setNumber(number);
  }

  public onOperatorClick(operator: string): void {
    this.calculatorService.setOperator(operator);
  }

  public onClearClick(): void {
    this.calculatorService.clear();
  }

  public onCalculateClick(): void {
    this.calculatorService.calculate();
  }
}

