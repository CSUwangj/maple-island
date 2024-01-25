import { EffectStats } from "./EffectStats"
import { ApplyEffect, StatsDetail } from "./StatsDetail"

export class Buff {
  name!: string
  level?: number
  icon?: string
  // apply order, small go first
  // we assume equipment is buff effect with order of 1000
  order!: number
  apply(a: StatsDetail): StatsDetail {
    return a
  }
  tips!: string
}

// I Assume General Buff is Buff that everyone will maximize it
export class GeneralBuff{
  name: string
  icon?: string
  order: number
  effect: EffectStats
  tips: string

  constructor(name: string, effect: EffectStats, icon?: string, order = 999, tips = '') {
    this.name = name
    this.effect = effect
    this.icon = icon
    this.order = order
    this.tips = tips
  }
  
  apply(init: StatsDetail): StatsDetail {
    return ApplyEffect(init, this.effect)
  }
}
