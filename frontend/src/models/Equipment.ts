import { EquipStats } from "./EquipStats"

export interface Equipment{
  stats: EquipStats
  flame: EquipStats
  soul: EquipStats
  potential: EquipStats
  level: number
  special: boolean
  set: string
}