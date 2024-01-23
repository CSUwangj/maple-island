import { EffectStats } from "./EffectStats"

export interface StatsDetail {
  pureDex: number
  pureStr: number
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

export const ApplyEffect = (init: StatsDetail, target: EffectStats) => {
  return {
    ...init,
    addedDex: init.addedDex + target.dex,
    addedStr: init.addedStr + target.str,
    addedInt: init.addedInt + target.int,
    addedLuk: init.addedLuk + target.luk,
    addedHp: init.addedHp + target.hp,
    addedMp: init.addedMp + target.mp,
    addedAtt: init.addedAtt + target.att,
    addedMatt: init.addedMatt + target.matt,
    dexPercent: init.percentDex + target.dexPercent + target.allStatPercent,
    strPercent: init.percentStr + target.strPercent + target.allStatPercent,
    intPercent: init.percentInt + target.intPercent + target.allStatPercent,
    lukPercent: init.percentLuk + target.lukPercent + target.allStatPercent,
    hpPercent: init.percentHp + target.hpPercent,
    mpPercent: init.percentMp + target.mpPercent,
    attPercent: init.percentAtt + target.attPercent,
    mattPercent: init.percentMatt + target.mattPercent,
    defence: init.defence + target.defence,
    critRate: init.critRate + target.critRate,
    ignoreEnemyDefence: target.ignoreEnemyDefence * (1 - init.ignoreEnemyDefence / 100) + init.ignoreEnemyDefence,
    bossDamage: init.bossDamage + target.bossDamage,
    critDamage: init.critDamage + target.critDamage,
    finalDamage: init.finalDamage * (100 + target.finalDamage) / 100
  }
}