import { Component, Input, OnInit } from '@angular/core';
import { PokemodalPage } from "../pokemodal/pokemodal.page";
import { ModalController } from "@ionic/angular";

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.scss'],
})
export class CompComponent implements OnInit {

  @Input() PokeName: string;
  imgPokemon: string;
  AbilitysPokemon: Ability[];
  TypesPokemon: Type[];

  constructor(private modalCtrl: ModalController) {}

  ngOnInit(){
    fetch(' https://pokeapi.co/api/v2/pokemon/'+ this.PokeName)
    .then(response => response.json())
    .then((data: RootObject)  => {
        this.imgPokemon = data.sprites.front_default;
        this.AbilitysPokemon = data.abilities;
        this.TypesPokemon = data.types;
    });
  }

  async openPokeModal(){
    const modal = await this.modalCtrl.create({
        component: PokemodalPage,
        componentProps: {
            nombrePoke: this.PokeName,
            imgPoke: this.imgPokemon,
            AbilityPoke: this.AbilitysPokemon,
            TypePoke: this.TypesPokemon
        }});
        return await modal.present();
    }
}

// Codigo sacado con la ayuda json2ts.com 
export interface Ability2 {
    name: string;
    url: string;
}

export interface Ability {
    ability: Ability2;
    is_hidden: boolean;
    slot: number;
}

export interface Form {
    name: string;
    url: string;
}

export interface Version {
    name: string;
    url: string;
}

export interface GameIndice {
    game_index: number;
    version: Version;
}

export interface Item {
    name: string;
    url: string;
}

export interface Version2 {
    name: string;
    url: string;
}

export interface VersionDetail {
    rarity: number;
    version: Version2;
}

export interface HeldItem {
    item: Item;
    version_details: VersionDetail[];
}

export interface Move2 {
    name: string;
    url: string;
}

export interface MoveLearnMethod {
    name: string;
    url: string;
}

export interface VersionGroup {
    name: string;
    url: string;
}

export interface VersionGroupDetail {
    level_learned_at: number;
    move_learn_method: MoveLearnMethod;
    version_group: VersionGroup;
}

export interface Move {
    move: Move2;
    version_group_details: VersionGroupDetail[];
}

export interface Species {
    name: string;
    url: string;
}

export interface Sprites {
    back_default: string;
    back_female?: any;
    back_shiny: string;
    back_shiny_female?: any;
    front_default: string;
    front_female?: any;
    front_shiny: string;
    front_shiny_female?: any;
}

export interface Stat2 {
    name: string;
    url: string;
}

export interface Stat {
    base_stat: number;
    effort: number;
    stat: Stat2;
}

export interface Type2 {
    name: string;
    url: string;
}

export interface Type {
    slot: number;
    type: Type2;
}

export interface RootObject {
    abilities: Ability[];
    base_experience: number;
    forms: Form[];
    game_indices: GameIndice[];
    height: number;
    held_items: HeldItem[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Move[];
    name: string;
    order: number;
    species: Species;
    sprites: Sprites;
    stats: Stat[];
    types: Type[];
    weight: number;
}

