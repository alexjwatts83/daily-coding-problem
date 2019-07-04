import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'daily-coding-problem';
  data = [
    {
      numbers: [10, 15, 3, 7],
      value: 17,
    }
  ];

  text: any[];

  ngOnInit() {
    console.log('hey');
    this.text = [];
    this.data.forEach(item => {
      this.text.push( {
        numbers: item.numbers,
        value: item.value,
        isMatched: this.doAnyTwoNumbersSumToValue(item.numbers, item.value)
      });
    });
  }

  doAnyTwoNumbersSumToValue(numbers: number[], value: number) {
    console.log('numbers', numbers);
    console.log('value', value);
    console.log('numbers.length', numbers.length);
    let matched = false;
    for (let i = 0; i < numbers.length; i++) {
      const num1 = numbers[i];
      console.group(num1.toString());
      for (let j = 0; j < numbers.length; j++) {
        const num2 = numbers[j];
        const sum = num1 + num2;
        if (sum === value) {
          matched = true;
          break;
        }
      }
      console.log(`matched for '${num1}' is ${matched}`);
      console.groupEnd();
      if (matched) {
        break;
      }
    }
    return matched;
  }
}
