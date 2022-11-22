export interface Character {
  name: string;
  race: CharacterRace,
  classes: Array<CharacterClass>;
  background: string;
  attributes: CharacterAttributes;
  feats: Array<string>,
  skills: CharacterSkills;
  tools: Array<CharacterSkill>;
  languages: Array<string>;
  maxHitPoints: number;
  currentHitPoints: number;
  armorClass: number;
}

export interface CharacterRace {
  race: string;
  subrace: string;
}

export interface CharacterClass {
  class: string;
  subclass?: string;
  level: number;
}

export interface CharacterAttributes {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

export interface CharacterSkills {
  athletics: CharacterSkill,
  acrobatics: CharacterSkill,
  sleightOfHand: CharacterSkill,
  stealth: CharacterSkill,
  arcana: CharacterSkill,
  history: CharacterSkill,
  investigation: CharacterSkill,
  nature: CharacterSkill,
  religion: CharacterSkill,
  animalHandling: CharacterSkill,
  insight: CharacterSkill,
  medicine: CharacterSkill,
  perception: CharacterSkill,
  survival: CharacterSkill,
  deception: CharacterSkill,
  intimidation: CharacterSkill,
  performance: CharacterSkill,
  persuasion: CharacterSkill,
}

export interface CharacterSkill {
  skill: string;
  attribute: string;
  isProficient: boolean;
  hasExpertise: boolean;
}
