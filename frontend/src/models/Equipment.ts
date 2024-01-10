import { EquipStats } from "./EquipStats"

export class Equipment{
  stats: EquipStats
  flame: EquipStats
  soul: EquipStats
  potential: EquipStats
  starForce: number
  statsSummary: EquipStats
  level: number
  special: boolean
  set: string

  constructor() {
    this.stats = new EquipStats()
    this.flame = new EquipStats()
    this.soul = new EquipStats()
    this.potential = new EquipStats()
    this.starForce = 0
    this.statsSummary = new EquipStats()
    this.level = 0
    this.special = false
    this.set = ''
  }
}