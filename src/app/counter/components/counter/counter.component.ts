import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: `
        <h3>Counter: {{counter}}</h3>

        <button (click)="incrementarPor(1)">+1</button>
        <button (click)="resetear()">Resetear</button>
        <button (click)="incrementarPor(-1)">-1</button>
    `
})
export class CounterComponent{

    counter: number = 10;

    incrementarPor(value: number):void{
        this.counter += value;
    }

    resetear(){
        this.counter = 10;
    }

}