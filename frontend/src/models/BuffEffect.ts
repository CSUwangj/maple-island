import { EffectStats } from "./EffectStats"
import { ApplyEffect, StatsDetail } from "./StatsDetail"

export interface Effect {
  apply(a: StatsDetail): StatsDetail
}

export class GeneralBuffEffect{
  effect: EffectStats
  constructor(effect: EffectStats) {
    this.effect = effect
  }
  
  apply(init: StatsDetail): StatsDetail {
    return ApplyEffect(init, this.effect)
  }
}
