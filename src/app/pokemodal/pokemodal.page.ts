import { Type, Type2, Ability2 } from './../comp/comp.component';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from "@ionic/angular";
import { Ability } from '../comp/comp.component';

@Component({
  selector: 'app-pokemodal',
  templateUrl: './pokemodal.page.html',
  styleUrls: ['./pokemodal.page.scss'],
})
export class PokemodalPage implements OnInit {

  @Input() nombrePoke: string;
  @Input() imgPoke: string;
  @Input() AbilityPoke: Ability[];
  @Input() TypePoke: Type[];

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  closePokeModal(){
    this.modalCtrl.dismiss();
  }

}
