import { EquipStats } from "./EquipStats"

export type EquipType = 'ring' | 'pendant' | 'weapon' | 'belt' | 'hat' | 'face' | 'eye' | 'top' | 'bottom' | 'overall' | 'shoe' | 'earring' | 'shoulder' | 'glove' | 'heart' | 'emblem' | 'badge' | 'medal' | 'sub-weapon' | 'cape' | 'totem' | 'pocket'

export class Equipment{
  name: string
  base: EquipStats
  flame: EquipStats
  soul: EquipStats
  sfStat: EquipStats
  canSF: boolean
  canPot: boolean
  potential: EquipStats
  starForce: number
  level: number
  special: boolean
  set: string
  slot: EquipType
  icon?: string

  constructor(
    name: string,
    set = '',
    level = 0,
    starForce = 0,
    special = false,
    canSF = true,
    canPot = true,
    stats: EquipStats = new EquipStats(),
    slot: EquipType = 'weapon',
    flame: EquipStats = new EquipStats(),
    soul: EquipStats = new EquipStats(),
    potential: EquipStats = new EquipStats(),
    icon?: string
  ) {
    this.name = name
    this.base = stats
    this.level = level
    this.special = special
    this.set = set
    this.canSF = canSF
    this.canPot = canPot
    this.sfStat = this.applyStarForce(starForce)
    this.starForce = starForce
    this.applyStarForce(starForce)
    this.slot = slot
    this.flame = flame
    this.soul = soul
    this.potential = potential
    this.icon = icon
  }

  applyStarForce(starForce: number) {
    return new EquipStats
  }

  // @TODO: need to avoid recalculation
  get statsSummary(): EquipStats {
    return this.base.add(this.flame).add(this.soul).add(this.potential).add(this.sfStat)
  }
}