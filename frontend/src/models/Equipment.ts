import { EffectStats } from "./EffectStats"
import { ApplyEffect, StatsDetail } from "./StatsDetail"

export type EquipType = 'ring' | 'pendant' | 'weapon' | 'belt' | 'hat' | 'face' | 'eye' | 'top' | 'bottom' | 'overall' | 'shoe' | 'earring' | 'shoulder' | 'glove' | 'heart' | 'emblem' | 'badge' | 'medal' | 'sub-weapon' | 'cape' | 'totem' | 'pocket'

export class Equipment{
  name: string
  base: EffectStats
  flame: EffectStats
  soul: EffectStats
  sfStat: EffectStats
  canSF: boolean
  canPot: boolean
  canFlame: boolean
  potential: EffectStats
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
    canSF = false,
    canPot = false,
    canFlame = false,
    stats: EffectStats = new EffectStats(),
    slot: EquipType = 'weapon',
    flame: EffectStats = new EffectStats(),
    soul: EffectStats = new EffectStats(),
    potential: EffectStats = new EffectStats(),
    icon?: string
  ) {
    this.name = name
    this.base = stats
    this.level = level
    this.special = special
    this.set = set
    this.canSF = canSF
    this.canPot = canPot
    this.canFlame = canFlame
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
    return new EffectStats
  }

  // @TODO: need to avoid recalculation
  get statsSummary(): EffectStats {
    return this.base.add(this.flame).add(this.soul).add(this.potential).add(this.sfStat)
  }

  setFlame(flame: EffectStats) {
    this.flame = flame
  }

  setPotential(potential: EffectStats) {
    this.potential = potential
  }

  setSoul(soul: EffectStats) {
    this.soul = soul
  }
}

export const ApplyEquipment = (init: StatsDetail, equip: Equipment) => {
  return ApplyEffect(init, equip.statsSummary)
}