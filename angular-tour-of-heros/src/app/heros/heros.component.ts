import { Component, OnInit } from '@angular/core';
import { hero }from '../hero';
import {HEROES} from '../mock-heros';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})

export class HerosComponent implements OnInit {
  heros = HEROES;
  constructor() { }
  ngOnInit() {}
  selectedHero : hero;
  onSelect(myHero : hero):void{
    this.selectedHero = myHero;
  }
}

