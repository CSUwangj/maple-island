import { Potential } from "data/potential"
import { EffectStats } from "./EffectStats"
import { ApplyEffect, StatsDetail } from "./StatsDetail"

export type EquipType = 'ring' | 'pendant' | 'weapon' | 'belt' | 'hat' | 'face' | 'eye' | 'top' | 'bottom' | 'overall' | 'shoe' | 'earring' | 'shoulder' | 'glove' | 'heart' | 'emblem' | 'badge' | 'medal' | 'sub-weapon' | 'cape' | 'totem' | 'pocket'

const IncreaseHPSlot = new Set<EquipType>(['hat', 'top', 'bottom', 'overall', 'cape', 'ring', 'pendant', 'belt', 'shoulder', 'weapon', 'sub-weapon'])
const AttAddAbove15Star = [
  // 128 ~ 137
  [[6, 7], [7, 8], [7, 9], [8, 10], [9, 11]],
  // 138 ~ 149
  [[7, 8], [8, 9], [8, 10], [9, 11], [10, 12], [11, 13], [12, 15], [30, 17], [31, 19], [32, 21]],
  // 150 ~ 159
  [[8, 9], [9, 10], [9, 11], [10, 12], [11, 13], [12, 14], [13, 16], [31, 18], [32, 20], [33, 22]],
  // 160 ~ 199
  [[9, 10], [9, 11], [10, 12], [11, 13], [12, 14], [13, 15], [14, 17], [32, 19], [33, 21], [34, 23]],
  // 200 ~ 249
  [[13, 12], [13, 13], [14, 14], [14, 15], [15, 16], [16, 17], [17, 19], [34, 21], [35, 23], [36, 25]],
  // 250 ~
  [[0, 14], [0, 15], [0, 16], [0, 17], [0, 18], [0, 19], [0, 21], [0, 23], [0, 25], [0, 27]]
]
export class Equipment{
  name: string
  base: EffectStats
  flame: EffectStats
  soul: EffectStats
  sfStat: EffectStats
  potential: Potential
  statsSummary: EffectStats
  canSF: boolean
  canPot: boolean
  canFlame: boolean
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
    slot: EquipType = 'cape',
    flame: EffectStats = new EffectStats(),
    soul: EffectStats = new EffectStats(),
    potential: Potential = [],
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
    this.flame = flame
    this.soul = soul
    this.potential = potential
    this.slot = slot
    this.icon = icon
    this.statsSummary = new EffectStats()
    this.starForce = starForce
    this.sfStat = new EffectStats()
    this.applyStarForce(starForce)
  }

  applyStarForce(starForce: number) {
    if(starForce === 0) this.sfStat = new EffectStats()
    const StatStarForce = Math.min(22, starForce)
    const statAdd = StatStarForce < 6 ? starForce * 2 :
      StatStarForce < 16 ? starForce * 3 - 5 :
        this.level > 249 ? StatStarForce * 17 - 215 :
          this.level > 199 ? StatStarForce * 15 - 185 :
            this.level > 159 ? StatStarForce * 13 - 155 :
              this.level > 149 ? StatStarForce * 11 - 125 :
                this.level > 137 ? StatStarForce * 9 - 95 : 
                  StatStarForce * 7 - 65
    const HMPStarForce = Math.min(15, starForce)
    const hmpAdd = HMPStarForce < 4 ? HMPStarForce * 5 :
      HMPStarForce < 6 ? HMPStarForce * 10 - 15 :
        HMPStarForce < 8 ? HMPStarForce * 15 - 40 :
          HMPStarForce < 10 ? HMPStarForce * 20 - 75 :
            HMPStarForce * 25 - 120
    const defAdd = Array(starForce).fill(0).map(() => (1 + Math.floor(this.base.defence / 20))).reduce((s, i) => s + i, 0)
    let attAdd = this.slot === 'weapon' ? Math.min(15, starForce) * (1 + Math.floor(this.base.att / 50)) : 0
    let mattAdd = this.slot === 'weapon' ? Math.min(15, starForce) * (1 + Math.floor(this.base.matt / 50)) : 0
    const levelRange = +(this.level > 137) + +(this.level > 149) + +(this.level > 159) + +(this.level > 199) + +(this.level > 249)
    const notWeapon = +(this.slot !== 'weapon')
    for(let i = 0; i + 16 < starForce; i += 1) {
      attAdd += AttAddAbove15Star[levelRange][i][notWeapon]
      mattAdd += AttAddAbove15Star[levelRange][i][notWeapon]
    }
    this.sfStat = new EffectStats(
      this.base.str ? statAdd : 0,
      this.base.dex ? statAdd : 0,
      this.base.int ? statAdd : 0,
      this.base.luk ? statAdd : 0,
      IncreaseHPSlot.has(this.slot) ? hmpAdd : 0,
      this.slot === 'weapon' ? hmpAdd : 0,
      0,
      0,
      this.base.att !== 0 ? attAdd : 0,
      this.base.matt !== 0 ? mattAdd : 0,
      0, 0,
      0, 0, 0, 0, 0,
      this.slot === 'weapon' ? 0 : defAdd
    )
    this.updateStatsSummary()
  }

  updateStatsSummary() {
    console.log(this.flame)
    console.log(this.soul)
    console.log(this.potential)
    console.log(this.sfStat)
    this.statsSummary = this.base.add(this.flame).add(this.soul).add(this.potential.reduce((stats, line) => stats.add(line.stats), new EffectStats())).add(this.sfStat)
    console.log(this.statsSummary)
  }

  setFlame(flame: EffectStats) {
    this.flame = flame
    this.updateStatsSummary()
  }

  setPotential(potential: Potential) {
    this.potential = potential
    this.updateStatsSummary()
  }

  setSoul(soul: EffectStats) {
    this.soul = soul
    this.updateStatsSummary()
  }
}

export const ApplyEquipment = (init: StatsDetail, equip: Equipment) => {
  return ApplyEffect(init, equip.statsSummary)
}