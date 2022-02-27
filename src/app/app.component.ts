import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  value: string = "";
  date: string = "";
  amount: number = 0;
  miles: number = 0;

  onInput(event: Event){
    this.value= (<HTMLInputElement>event.target).value;
    // console.log("Input Captured: ", this.value);
  }

  onDateChange(event: Event){
    this.date= (<HTMLInputElement>event.target).value;
  }
  
  onAmountChange(event: Event){
    this.amount = parseFloat((<HTMLInputElement>event.target).value);
    // console.log("Input Captured: ", this.date);
  }

  onMilesChange(event: Event){
    this.miles = parseFloat((<HTMLInputElement>event.target).value);
  }
}
