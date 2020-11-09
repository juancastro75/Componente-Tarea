import { Component, OnInit, ViewChild} from '@angular/core';
import { IonInfiniteScroll } from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  @ViewChild(IonInfiniteScroll, {static: true}) ionInfiniteScroll: IonInfiniteScroll;

  pokemon: Result[] ;
  ListaDePokemones: Poke
  logo:string = '../../assets/icon/pngwing.com (1).png';

  constructor() { }

  ngOnInit() {
    fetch(' https://pokeapi.co/api/v2/pokemon')
    .then(response => response.json())
    .then((data: Poke)  => {
      this.pokemon = data.results;
      this.ListaDePokemones = data;
    });
  }

  loadData(event) {
    setTimeout(() => {

      if (this.pokemon.length == 1050) {
        event.target.complete();
        this.ionInfiniteScroll.disabled = true;
        return;
      }

      fetch(this.ListaDePokemones.next)
    .then(response => response.json())
    .then((data: Poke)  => {
      this.pokemon.push(...data.results);
      this.ListaDePokemones = data;
    });

      event.target.complete();
    }, 1500);
  }
}

export interface Result {
 name: string;
 url: string;
}

export interface Poke {
 count: number;
 next: string;
 previous?: any;
 results: Result[];
}

