import { StatsDetail } from "./StatsDetail"

export class GeneralBuffEffect {
  dex: number
  str: number
  int: number
  luk: number
  hp: number
  mp: number
  hpPercent: number
  mpPercent: number
  att: number
  matt: number
  attPercent: number
  mattPercent: number
  dexPercent: number
  strPercent: number
  intPercent: number
  lukPercent: number
  defence: number
  ignoreEnemyDefence: number
  bossDamage: number
  critDamage: number
  finalDamage: number
  ignoreElementResistence: number

  constructor() {
    this.dex = 0
    this.str = 0
    this.int = 0
    this.luk = 0
    this.hp = 0
    this.mp = 0
    this.hpPercent = 0
    this.mpPercent = 0
    this.att = 0
    this.matt = 0
    this.attPercent = 0
    this.mattPercent = 0
    this.dexPercent = 0
    this.strPercent = 0
    this.intPercent = 0
    this.lukPercent = 0
    this.defence = 0
    this.ignoreEnemyDefence = 0
    this.bossDamage = 0
    this.critDamage = 0
    this.finalDamage = 0
    this.ignoreElementResistence = 0
  }

  public apply(stats: StatsDetail): StatsDetail {
    return {
      dex: this.dex + stats.dex,
      str: this.str + stats.str,
      int: this.int + stats.int,
      luk: this.luk + stats.luk,
      hp: this.hp + stats.hp,
      mp: this.mp + stats.mp,
      hpPercent: this.hpPercent + stats.hpPercent,
      mpPercent: this.mpPercent + stats.mpPercent,
      att: this.att + stats.att,
      matt: this.matt + stats.matt,
      attPercent: this.attPercent + stats.attPercent,
      mattPercent: this.mattPercent + stats.mattPercent,
      dexPercent: this.dexPercent + stats.dexPercent,
      strPercent: this.strPercent + stats.strPercent,
      intPercent: this.intPercent + stats.intPercent,
      lukPercent: this.lukPercent + stats.lukPercent,
      defence: this.defence + stats.defence,
      ignoreEnemyDefence:this.ignoreEnemyDefence * (1 - stats.ignoreEnemyDefence / 100),
      bossDamage: this.bossDamage + stats.bossDamage,
      critDamage: this.critDamage + stats.critDamage,
      finalDamage: this.finalDamage * stats.finalDamage,
      ignoreElementResistence: this.ignoreElementResistence + stats.ignoreElementResistence
    }
  }
}

export interface BuffEffect {
  apply(a: StatsDetail): StatsDetail
}