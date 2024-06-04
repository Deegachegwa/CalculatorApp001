import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  calculate() {
    throw new Error('Method not implemented.');
  }
  clear() {
    throw new Error('Method not implemented.');
  }
  setOperator(operator: string) {
    throw new Error('Method not implemented.');
  }
  setNumber(number: string) {
    throw new Error('Method not implemented.');
  }
  getCurrentNumber(): string {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
