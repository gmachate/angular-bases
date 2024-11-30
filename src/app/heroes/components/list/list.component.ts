import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  heroName: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor', 'Capitan America'];
  deleteHero?: string;

  removeLastHero(){
    this.deleteHero =  this.heroName.pop();
  }
}
