import { Equipment } from "./Equipment"
import { HyperStat } from "./HyperStat"

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