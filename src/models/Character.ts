import { Equipment } from "./Equipment"
import { HyperStat } from "./HyperStat"

export const Warrior = new Set(["Hero", "Paladin", "Dark Knight", "Dawn Warrior", "Mihile", "Aran", "Blaster", "Demon Slayer", "Demon Avenger", "Kaiser", "Hayato", "Zero"])
export const Mage = new Set(["Bishop", "Arch Mage (Ice, Lightning)", "Arch Mage (Fire, Poison)", "Blaze Wizard", "Luminous", "Evan", "Battle Mage", "Kanna", "Adele", "Illium", "Lara", "Kinesis", "Beast Tamer"])
export const Thief = new Set(["Dual Blade", "Shadower", "Night Lord", "Night Walker", "Phantom", "Xenon", "Cadena", "Khali", "Hoyoung"])
export const Archer = new Set(["Pathfinder", "Marksman", "Bowmaster", "Wind Archer", "Mercedes", "Wild Hunter", "Kain"])
export const Pirate = new Set(["Cannoneer", "Buccanner", "Corsair", "Jett", "Thunder Breaker", "Shade", "Mechanic", "Angelic Buster", "Ark"])

export interface Character {
  id?: number
  level: number
  name: string
  job: string //"Hero" | "Paladin" | "Dark Knight" | "Bishop" | "Arch Mage (Ice, Lightning)" | "Arch Mage (Fire, Poison)" | "Dual Blade" | "Shadower" | "Night Lord" | "Pathfinder" | "Marksman" | "Bowmaster" | "Cannoneer" | "Buccanner" | "Corsair" | "Jett" | "Dawn Warrior" | "Thunder Breaker" | "Night Walker" | "Wind Archer" | "Blaze Wizard" | "Mihile" | "Mercedes" | "Aran" | "Phantom" | "Luminous" | "Evan" | "Shade" | "Battle Mage" | "Blaster" | "Mechanic" | "Wild Hunter" | "Xenon" | "Demon Slayer" | "Demon Avenger" | "Angelic Buster" | "Kaiser" | "Cadena" | "Kain" | "Kanna" | "Hayato" | "Adele" | "Ark" | "Illium" | "Khali" | "Hoyoung" | "Lara" | "Kinesis" | "Zero" | "Beast Tamer"
  equip?: Equipment[]
  heyper?: HyperStat
  // base64 encoded image, can be used in img tag's src property directly
  image: string
}