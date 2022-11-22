import { Component, VERSION } from '@angular/core';
import { testCharacter } from './data/data';
import {
  Character,
  CharacterAttributes,
  CharacterSkill,
} from './models/character';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  character: Character;
  attributes: Character;

  constructor() {
    this.character = testCharacter;
  }

  setProficiency(skill: string) {
    switch (skill) {
      case 'athletics':
        this.updateProficiencyForSkill(this.character.skills.athletics);
        break;
      case 'acrobatics':
        this.updateProficiencyForSkill(this.character.skills.acrobatics);
        break;
      case 'sleightOfHand':
        this.updateProficiencyForSkill(this.character.skills.sleightOfHand);
        break;
      case 'stealth':
        this.updateProficiencyForSkill(this.character.skills.stealth);
        break;
      case 'arcana':
        this.updateProficiencyForSkill(this.character.skills.arcana);
        break;
      case 'history':
        this.updateProficiencyForSkill(this.character.skills.history);
        break;
      case 'investigation':
        this.updateProficiencyForSkill(this.character.skills.investigation);
        break;
      case 'nature':
        this.updateProficiencyForSkill(this.character.skills.nature);
        break;
      case 'religion':
        this.updateProficiencyForSkill(this.character.skills.religion);
        break;
      case 'animalHandling':
        this.updateProficiencyForSkill(this.character.skills.animalHandling);
        break;
      case 'insight':
        this.updateProficiencyForSkill(this.character.skills.insight);
        break;
      case 'medicine':
        this.updateProficiencyForSkill(this.character.skills.medicine);
        break;
      case 'perception':
        this.updateProficiencyForSkill(this.character.skills.perception);
        break;
      case 'survival':
        this.updateProficiencyForSkill(this.character.skills.survival);
        break;
      case 'deception':
        this.updateProficiencyForSkill(this.character.skills.deception);
        break;
      case 'intimidation':
        this.updateProficiencyForSkill(this.character.skills.intimidation);
        break;
      case 'performance':
        this.updateProficiencyForSkill(this.character.skills.performance);
        break;
    }
  }

  private updateProficiencyForSkill(skill: CharacterSkill) {
    if (skill.hasExpertise) {
      skill.hasExpertise = false;
      skill.isProficient = false;
    } else if (skill.isProficient) {
      skill.hasExpertise = true;
    } else {
      skill.isProficient = true;
    }
  }
}
