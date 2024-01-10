import { EquipStats } from "./EquipStats"
import { StatsDetail } from "./StatsDetail"

export class Sets {
  name: string
  effect: EquipStats[]
  
  constructor() {
    this.name = ''
    this.effect = []
  }

  public apply(initStat: StatsDetail): StatsDetail {
    return initStat
  }
}