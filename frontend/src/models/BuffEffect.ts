import { EffectStats } from "./EffectStats"
import { ApplyEffect, StatsDetail } from "./StatsDetail"

export interface Effect {
  icon?: string
  apply(a: StatsDetail): StatsDetail
}

export class GeneralBuffEffect{
  name: string
  icon?: string
  effect: EffectStats

  constructor(name: string, effect: EffectStats, icon?: string) {
    this.name = name
    this.effect = effect
    this.icon = icon
  }
  
  apply(init: StatsDetail): StatsDetail {
    return ApplyEffect(init, this.effect)
  }
}
