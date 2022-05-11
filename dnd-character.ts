import { nextTick } from "process";

export class DnDCharacter {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  hitpoints: number;

  constructor() {
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();
    this.hitpoints = DnDCharacter.getModifierFor(this.constitution) + 10;
  }

  static get randomNumberGenerator() {
    return Math.ceil(Math.random() * 6)
  }

  static generateAbilityScore() {
    const rollOne = this.randomNumberGenerator
    const rollTwo = this.randomNumberGenerator
    const rollThree = this.randomNumberGenerator
    const rollFour = this.randomNumberGenerator
    const diceRolls = [rollOne, rollTwo, rollThree, rollFour]
    const minRoll = Math.min(...diceRolls)
    const topThreeRolls = diceRolls.filter(number => number !== minRoll)
    return topThreeRolls.reduce((runningTotal, nextNumb) => runningTotal + nextNumb, 0)
  }

  static getModifierFor(constitution: number) {
    return Math.floor((constitution - 10) / 2)
  }
}
