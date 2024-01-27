import { EffectStats } from "./EffectStats"

export interface StatsDetail {
  pureStr: number
  pureDex: number
  pureInt: number
  pureLuk: number
  pureHp: number
  pureMp: number
  addedDex: number
  addedStr: number
  addedInt: number
  addedLuk: number
  addedHp: number
  addedMp: number
  addedAtt: number
  addedMatt: number
  finalDex: number
  finalStr: number
  finalInt: number
  finalLuk: number
  finalHp: number
  finalMp: number
  finalAtt: number
  finalMatt: number
  mastery: number
  multiplier: number
  percentStr: number
  percentDex: number
  percentInt: number
  percentLuk: number
  percentHp: number
  percentMp: number
  percentAtt: number
  percentMatt: number
  defence: number
  ignoreEnemyDefence: number
  damage: number
  bossDamage: number
  normalMonsterDamage: number
  critRate: number
  critDamage: number
  finalDamage: number
  ignoreElementResistence: number
}

export const ApplyEffect = (init: StatsDetail, target: EffectStats): StatsDetail => {
  return {
    ...init,
    addedStr: init.addedStr + target.str,
    addedDex: init.addedDex + target.dex,
    addedInt: init.addedInt + target.int,
    addedLuk: init.addedLuk + target.luk,
    addedHp: init.addedHp + target.hp,
    addedMp: init.addedMp + target.mp,
    addedAtt: init.addedAtt + target.att,
    addedMatt: init.addedMatt + target.matt,
    percentStr: init.percentStr + target.percentStr + target.percentAllStat,
    percentDex: init.percentDex + target.percentDex + target.percentAllStat,
    percentInt: init.percentInt + target.percentInt + target.percentAllStat,
    percentLuk: init.percentLuk + target.percentLuk + target.percentAllStat,
    percentHp: init.percentHp + target.hpPercent,
    percentMp: init.percentMp + target.mpPercent,
    percentAtt: init.percentAtt + target.attPercent,
    percentMatt: init.percentMatt + target.mattPercent,
    defence: init.defence + target.defence,
    critRate: init.critRate + target.critRate,
    ignoreEnemyDefence: target.ignoreEnemyDefence * (1 - init.ignoreEnemyDefence / 100) + init.ignoreEnemyDefence,
    bossDamage: init.bossDamage + target.bossDamage,
    critDamage: init.critDamage + target.critDamage,
    finalDamage: init.finalDamage * (100 + target.finalDamage) / 100
  }
}