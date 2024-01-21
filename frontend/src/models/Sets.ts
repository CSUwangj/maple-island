import _ from "lodash"
import { EffectStats } from "./EffectStats"
import { ApplyEffect, StatsDetail } from "./StatsDetail"

export class Sets {
  name: string
  effect: EffectStats[]
  
  constructor(name: string, effect: EffectStats[]) {
    this.name = name
    this.effect = effect
  }

  public apply(initStat: StatsDetail, count: number): StatsDetail {
    let targetEffect = new EffectStats()
    for(let i = Math.min(count, this.effect.length - 1); i >= 0 ; i -= 1) {
      if(_.isEqual(this.effect[i], new EffectStats())) continue
      targetEffect = this.effect[i]
      break
    }
    return ApplyEffect(initStat, targetEffect)
  }
}