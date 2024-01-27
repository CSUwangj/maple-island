export type Job = 'Hero' | 'Paladin' | 'Dark Knight' | 'Dawn Warrior' | 'Mihile' | 'Aran' | 'Blaster' | 'Demon Slayer' | 'Demon Avenger' | 'Kaiser' | 'Hayato' | 'Adele' | 'Zero' | 'Bishop' | 'Fire/Poison Archmage' | 'Ice/Lightning Archmage' | 'Blaze Wizard' | 'Luminous' | 'Evan' | 'Battle Mage' | 'Kanna' | 'Illium' | 'Lara' | 'Kinesis' | 'Beast Tamer' | 'Night Lord' | 'Night Walker' | 'Phantom' | 'Khali' | 'Hoyoung' | 'Xenon' | 'Blade Master' | 'Shadower' | 'Cadena' | 'Pathfinder' | 'Marksman' | 'Bowmaster' | 'Wind Archer' | 'Mercedes' | 'Wild Hunter' | 'Kain' | 'Cannon Master' | 'Buccaneer' | 'Shade' | 'Thunder Breaker' | 'Corsair' | 'Jett' | 'Mechanic' | 'Angelic Buster' | 'Ark'
export const Warrior: Set<Job> = new Set(['Hero', 'Paladin', 'Dark Knight', 'Dawn Warrior', 'Mihile', 'Aran', 'Blaster', 'Demon Slayer', 'Demon Avenger', 'Kaiser', 'Hayato', 'Adele', 'Zero'])
export const Mage: Set<Job> = new Set(['Bishop', 'Fire/Poison Archmage', 'Ice/Lightning Archmage', 'Blaze Wizard', 'Luminous', 'Evan', 'Battle Mage', 'Kanna', 'Illium', 'Lara', 'Kinesis', 'Beast Tamer'])
export const DexStrThief: Set<Job> = new Set(['Blade Master', 'Shadower', 'Cadena'])
export const Xenon: Set<Job> = new Set(['Xenon'])
export const DexThief: Set<Job> = new Set(['Night Lord', 'Night Walker', 'Phantom', 'Khali', 'Hoyoung'])
export const Thief: Set<Job> = new Set([...DexThief, ...Xenon, ...DexStrThief])
export const Bowman: Set<Job> = new Set(['Pathfinder', 'Marksman', 'Bowmaster', 'Wind Archer', 'Mercedes', 'Wild Hunter', 'Kain'])
export const StrPirate: Set<Job> = new Set(['Cannon Master', 'Buccaneer', 'Shade', 'Thunder Breaker'])
export const DexPirate: Set<Job> = new Set(['Corsair', 'Jett', 'Mechanic', 'Angelic Buster', 'Ark'])
export const Pirate: Set<Job> = new Set([...StrPirate, ...DexPirate])
export const AllJobs: Set<Job> = new Set([...Warrior, ...Mage, ...Thief, ...Bowman, ...Pirate])
export const JobDefaultMastery:Record<Job, number> = {
  'Hero': 0.2,
  'Paladin': 0.2,
  'Dark Knight': 0.2,
  'Dawn Warrior': 0.2,
  'Mihile': 0.2,
  'Aran': 0.2,
  'Blaster': 0.2,
  'Demon Slayer': 0.2,
  'Demon Avenger': 0.2,
  'Kaiser': 0.2,
  'Hayato': 0.2,
  'Adele': 0.2,
  'Zero': 0.2,
  'Bishop': 0.25,
  'Fire/Poison Archmage': 0.25,
  'Ice/Lightning Archmage': 0.25,
  'Blaze Wizard': 0.25,
  'Luminous': 0.25,
  'Evan': 0.25,
  'Battle Mage': 0.25,
  'Kanna': 0.25,
  'Illium': 0.2,
  'Lara': 0.25,
  'Kinesis': 0.2,
  'Beast Tamer': 0.2,
  'Night Lord': 0.15,
  'Night Walker': 0.15,
  'Phantom': 0.2,
  'Khali': 0.2,
  'Hoyoung': 0.2,
  'Xenon': 0.2,
  'Blade Master': 0.2,
  'Shadower': 0.2,
  'Cadena': 0.2,
  'Pathfinder': 0.15,
  'Marksman': 0.15,
  'Bowmaster': 0.15,
  'Wind Archer': 0.15,
  'Mercedes': 0.15,
  'Wild Hunter': 0.15,
  'Kain': 0.15,
  'Cannon Master': 0.15,
  'Buccaneer': 0.2,
  'Shade': 0.2,
  'Thunder Breaker': 0.2,
  'Corsair': 0.15,
  'Jett': 0.2,
  'Mechanic': 0.15,
  'Angelic Buster': 0.25,
  'Ark': 0.2,
}