import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('LAB4');


  inputValue: any = null; 
  resultValue: number | null = null;

  updateInputValue(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.inputValue = inputElement.value;
    this.resultValue = null; 
    console.log(this.inputValue,'😸');
  }

  calculateAndDisplay(): void {
    const numValue = Number(this.inputValue);

    if (!isNaN(numValue) && this.inputValue !== null && this.inputValue !== '') {
      this.resultValue = numValue * 10;
    } else {
      this.resultValue = null;
      alert('Invalid input. Please enter a valid number.');
    }
  }
  
}
