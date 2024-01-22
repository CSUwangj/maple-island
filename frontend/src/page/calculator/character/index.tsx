import styled from "@emotion/styled/macro"
import { Character } from "models/Character"
import { ApplyEquipment, Equipment } from "models/Equipment"
import { Effect } from "models/BuffEffect"
import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { AllJobs, Bowman, DexPirate, DexStrThief, Mage, StrPirate, Thief, Warrior } from "models/Jobs"
import { Badges, Belts, Earrings, Eyes, Faces, Hearts, Medals, Pendants, Pockets, Rings, Shoulders, Totems } from "data/equipments"
import { SubWeapons } from "data/equipments/SecondaryWeapon"
import { Bottoms, Capes, Gloves, Hats, Overalls, Shoes, Tops } from "data/equipments/Armor"
import { Weapons } from "data/equipments/Weapon"
import { EquipmentCard } from "./components/EquipmentCard"
import { ApplyEffect, StatsDetail } from "models/StatsDetail"
import { EquipSets } from "data/sets/Sets"

const StatRow = styled.tr``
const StatName = styled.td``
const StatVal = styled.td``

const EquipmentsOptions = [
  {name: 'belt' ,slot: 'belt', options: Belts},
  {name: 'sub-weapon' ,slot: 'sub-weapon', options: SubWeapons},
  {name: 'shoe' ,slot: 'shoe', options: Shoes},
  {name: 'cape' ,slot: 'cape', options: Capes},
  {name: 'bottom' ,slot: 'bottom', options: Bottoms},
  {name: 'heart' ,slot: 'heart', options: Hearts},
  {name: 'shoulder' ,slot: 'shoulder', options: Shoulders},
  {name: 'overall' ,slot: 'overall', options: Overalls},
  {name: 'pocket' ,slot: 'pocket', options: Pockets},
  {name: 'top' ,slot: 'top', options: Tops},
  {name: 'badge' ,slot: 'badge', options: Badges},
  {name: 'eye' ,slot: 'eye', options: Eyes},
  {name: 'face' ,slot: 'face', options: Faces},
  {name: 'pendant1' ,slot: 'pendant', options: Pendants},
  {name: 'pendant2' ,slot: 'pendant', options: Pendants},
  {name: 'earring' ,slot: 'earring', options: Earrings},
  {name: 'hat' ,slot: 'hat', options: Hats},
  {name: 'ring1' ,slot: 'ring', options: Rings},
  {name: 'ring2' ,slot: 'ring', options: Rings},
  {name: 'ring3' ,slot: 'ring', options: Rings},
  {name: 'ring4' ,slot: 'ring', options: Rings},
  {name: 'glove' ,slot: 'glove', options: Gloves},
  {name: 'medal' ,slot: 'medal', options: Medals},
  {name: 'weapon' ,slot: 'weapon', options: Weapons},
  {name: 'totem1' ,slot: 'totem', options: Totems},
  {name: 'totem2' ,slot: 'totem', options: Totems},
  {name: 'totem3' ,slot: 'totem', options: Totems}
]

// ignore xenon and demon avenger
const baseStats = (job: string, level: number) => {
  const mainStat = level < 60 ? level * 5 + 4 :
    level < 100 ? level * 5 + 9 :
      level * 5 + 14
  let pureStr = 4
  let pureDex = 4
  let pureInt = 4
  let pureLuk = 4
  const pureHp = 0
  const pureMp = 0
  const addedStr = 0
  const addedDex = 0
  const addedInt = 0
  const addedLuk = 0
  const addedHp = 0
  const addedMp = 0
  const addedAtt = 0
  const addedMatt = 0
  const finalStr = 0
  const finalDex = 0
  const finalInt = 0
  const finalLuk = 0
  const finalHp = 0
  const finalMp = 0
  const finalAtt = 0
  const finalMatt = 0
  const mastery = 0
  const multiplier = 0
  const percentStr = 0
  const percentDex = 0
  const percentInt = 0
  const percentLuk = 0
  const percentHp = 0
  const percentMp = 0
  const percentAtt = 0
  const percentMatt = 0
  const defence = 0
  const ignoreEnemyDefence = 0
  const damage = 0
  const bossDamage = 0
  const normalMonsterDamage = 0
  const critDamage = 0
  const finalDamage = 0
  const ignoreElementResistence = 0
  const critRate = 0
  if(Warrior.has(job) || StrPirate.has(job)) {
    pureStr = mainStat
  } else if(Bowman.has(job) || DexPirate.has(job)) {
    pureDex = mainStat
  } else if(Mage.has(job)){
    pureInt = mainStat
  } else if(Thief.has(job)) {
    pureLuk = mainStat
  }
  // long live the beginner!
  return {
    pureStr,
    pureDex,
    pureInt,
    pureLuk,
    pureHp,
    pureMp,
    addedDex,
    addedStr,
    addedInt,
    addedLuk,
    addedHp,
    addedMp,
    addedAtt,
    addedMatt,
    finalDex,
    finalStr,
    finalInt,
    finalLuk,
    finalHp,
    finalMp,
    finalAtt,
    finalMatt,
    mastery,
    multiplier,
    percentStr,
    percentDex,
    percentInt,
    percentLuk,
    percentHp,
    percentMp,
    percentAtt,
    percentMatt,
    defence,
    ignoreEnemyDefence,
    damage,
    bossDamage,
    normalMonsterDamage,
    critDamage,
    finalDamage,
    ignoreElementResistence,
    critRate
  }
}

const calculateStatValue = (str: number, dex: number, int: number, luk: number, hp: number, job: string) => {
  if(Warrior.has(job) || StrPirate.has(job)) {
    return str * 4 + dex
  } else if(Bowman.has(job) || DexPirate.has(job)) {
    return dex * 4 + str
  } else if(Mage.has(job)){
    return int * 4 + luk
  } else if(DexStrThief.has(job)) {
    return luk * 4 + str + dex
  } else if(Thief.has(job)) {
    return luk * 4 + dex
  }
  // i don't know what's beginner's formula :)
  return str * 4 + dex
}

const calcStats = (stats: StatsDetail) => {
  const str = Math.floor((stats.pureStr +  stats.addedStr) * (100 + stats.percentStr) / 100 + stats.finalStr)
  const dex = Math.floor((stats.pureDex +  stats.addedDex) * (100 + stats.percentDex) / 100 + stats.finalDex)
  const int = Math.floor((stats.pureInt +  stats.addedInt) * (100 + stats.percentInt) / 100 + stats.finalInt)
  const luk = Math.floor((stats.pureLuk +  stats.addedLuk) * (100 + stats.percentLuk) / 100 + stats.finalLuk)
  const hp = Math.floor((stats.pureHp +  stats.addedHp) * (100 + stats.percentHp) / 100 + stats.finalHp)
  const mp = Math.floor((stats.pureMp +  stats.addedMp) * (100 + stats.percentMp) / 100 + stats.finalMp)
  const att = Math.floor((stats.addedAtt) * (100 + stats.percentAtt) / 100 + stats.finalAtt)
  const matt = Math.floor((stats.addedMatt) * (100 + stats.percentMatt) / 100 + stats.finalMatt)
  return [str, dex, int, luk, hp, mp, att, matt]
}

export const Page: React.FC = ({ }) => {
  const [ level, setLevel ] = useState(0)
  const [ job, setJob ] = useState('Pathfinder')
  const { t } = useTranslation()
  const [ buffs, setBuffs ] = useState<Effect[]>([])
  const equipments = EquipmentsOptions.map((e) => {
    const [equipment, setEquipment] = useState(new Equipment(''))
    return {...e, equipment: equipment, setEquipment: setEquipment}
  })

  // pure stats
  let stats = baseStats(job, level)
  const sets = new Map()

  for(const { equipment } of equipments) {
    stats = ApplyEquipment(stats, equipment)
    if(equipment.set === '') continue
    sets.set(equipment.set, (sets.get(equipment.set) ?? 0) + 1)
  }

  sets.forEach((count, set) => {
    console.log(`${set} ${count}`)
    stats = EquipSets.get(set)!.apply(stats, count)
  })

  for(const buff of buffs) {
    stats = buff.apply(stats)
  }

  const [str, dex, int, luk, hp, mp, att, matt] = calcStats(stats)

  // stat value
  const statValue = calculateStatValue(str, dex, int, luk, hp, job)
  const upperActual = stats.multiplier * statValue * att / 100
  const lowerActual = stats.mastery * upperActual
  const drMax = upperActual * (1 + stats.damage / 100) * (1 + stats.finalDamage / 100)
  const drMin = lowerActual * (1 + stats.damage / 100) * (1 + stats.finalDamage / 100)
  return <>
    <table>
      <tbody>
        <StatRow>
          <StatName>{t('calc.job')}</StatName>
          <StatVal>
            <select value={job} onChange={(e) => setJob(e.target.value)}>
              {
                Array.from(AllJobs).map((job) => <option key={job} value={job}>{job}</option>)
              }
            </select>
          </StatVal>
        </StatRow>
        <StatRow>
          <StatName>{t('calc.lv')}</StatName>
          <StatVal>
            <input type='number' min={0} max={300} onChange={e => setLevel(parseInt(e.target.value))} value={level} />
          </StatVal>
        </StatRow>
        <StatRow>
          <StatName>{t('calc.str')}</StatName>
          <StatVal>{`${str} (${stats.pureStr}+${str - stats.pureStr})`}</StatVal>
        </StatRow>
        <StatRow>
          <StatName>{t('calc.dex')}</StatName>
          <StatVal>{`${dex} (${stats.pureDex}+${dex - stats.pureDex})`}</StatVal>
        </StatRow>
        <StatRow>
          <StatName>{t('calc.int')}</StatName>
          <StatVal>{`${int} (${stats.pureInt}+${int - stats.pureInt})`}</StatVal>
        </StatRow>
        <StatRow>
          <StatName>{t('calc.luk')}</StatName>
          <StatVal>{`${luk} (${stats.pureLuk}+${luk - stats.pureLuk})`}</StatVal>
        </StatRow>
        <StatRow>
          <StatName>{t('calc.hp')}</StatName>
          <StatVal>{hp}</StatVal>
        </StatRow>
        <StatRow>
          <StatName>{t('calc.mp')}</StatName>
          <StatVal>{mp}</StatVal>
        </StatRow>
        <StatRow>
          <StatName>{t('calc.dr')}</StatName>
          <StatVal>{Math.round(drMin)}~{Math.round(drMax)}</StatVal>
        </StatRow>
        <StatRow>
          <StatName>{t('calc.dmg')}</StatName>
          <StatVal>{stats.damage}%</StatVal>
        </StatRow>
        <StatRow>
          <StatName>{t('calc.bd')}</StatName>
          <StatVal>{stats.bossDamage}%</StatVal>
        </StatRow>
        <StatRow>
          <StatName>{t('calc.nmd')}</StatName>
          <StatVal>{stats.normalMonsterDamage}%</StatVal>
        </StatRow>
        <StatRow>
          <StatName>{t('calc.fd')}</StatName>
          <StatVal>{stats.finalDamage}%</StatVal>
        </StatRow>
        <StatRow>
          <StatName>{t('calc.ied')}</StatName>
          <StatVal>{stats.ignoreEnemyDefence}%</StatVal>
        </StatRow>
        <StatRow>
          <StatName>{t('calc.ier')}</StatName>
          <StatVal>{stats.ignoreElementResistence}%</StatVal>
        </StatRow>
        <StatRow>
          <StatName>{t('calc.cd')}</StatName>
          <StatVal>{stats.critDamage}%</StatVal>
        </StatRow>
        <StatRow>
          <StatName>{t('calc.att')}</StatName>
          <StatVal>{att}</StatVal>
        </StatRow>
        <StatRow>
          <StatName>{t('calc.matt')}</StatName>
          <StatVal>{matt}</StatVal>
        </StatRow>
        <StatRow>
          <StatName>{t('calc.def')}</StatName>
          <StatVal>{stats.defence}</StatVal>
        </StatRow>
        <StatRow>
          <StatName>{t('calc.sf')}</StatName>
          <StatVal>{equipments.reduce((prev, current) => prev + current.equipment.starForce, 0)}%</StatVal>
        </StatRow>
        <StatRow>
          <StatName>{t('calc.af')}</StatName>
          <StatVal>{0}%</StatVal>
        </StatRow>
        <StatRow>
          <StatName>{t('calc.sacf')}</StatName>
          <StatVal>{0}%</StatVal>
        </StatRow>
      </tbody>
    </table>
    {
      equipments.map((equip) => <EquipmentCard key={equip.name} {...equip} />)
    }
  </>
}