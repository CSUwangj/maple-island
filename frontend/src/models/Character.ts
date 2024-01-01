import { Equipment } from './Equipment'
import { HyperStat } from './HyperStat'

export const Warrior = new Set(['Hero', 'Paladin', 'Dark Knight', 'Dawn Warrior', 'Mihile', 'Aran', 'Blaster', 'Demon Slayer', 'Demon Avenger', 'Kaiser', 'Hayato', 'Adele', 'Zero'])
export const Mage = new Set(['Bishop', 'Fire/Poison Archmage', 'Ice/Lightning Archmage', 'Arch Mage (Ice, Lightning)', 'Arch Mage (Fire, Poison)', 'Blaze Wizard', 'Luminous', 'Evan', 'Battle Mage', 'Kanna', 'Illium', 'Lara', 'Kinesis', 'Beast Tamer'])
export const Thief = new Set(['Blade Master', 'Dual Blade', 'Shadower', 'Night Lord', 'Night Walker', 'Phantom', 'Xenon', 'Cadena', 'Khali', 'Hoyoung'])
export const Archer = new Set(['Pathfinder', 'Marksman', 'Bowmaster', 'Wind Archer', 'Mercedes', 'Wild Hunter', 'Kain'])
export const Pirate = new Set(['Cannon Master', 'Cannoneer', 'Buccanner', 'Buccaneer', 'Corsair', 'Jett', 'Thunder Breaker', 'Shade', 'Mechanic', 'Angelic Buster', 'Ark'])

export interface Character {
  id?: number
  level: number
  name: string
  job: string
  equip?: Equipment[]
  heyper?: HyperStat
  // base64 encoded image, can be used in img tag's src property directly
  image: string
}