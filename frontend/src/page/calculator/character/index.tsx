/* eslint-disable @typescript-eslint/no-non-null-assertion */
import styled from "@emotion/styled/macro"
import { ApplyEquipment, Equipment } from "models/Equipment"
import { Buff, GeneralBuff } from "models/BuffEffect"
import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { AllJobs, Bowman, DexPirate, DexStrThief, Job, JobDefaultMastery, Mage, StrPirate, Thief, Warrior } from "models/Jobs"
import { Badges, Belts, Earrings, Emblems, Eyes, Faces, Hearts, Medals, Pendants, Pockets, Rings, Shoulders, Totems } from "data/equipments"
import { SubWeapons } from "data/equipments/SecondaryWeapon"
import { Bottoms, Capes, Gloves, Hats, Overalls, Shoes, Tops } from "data/equipments/Armor"
import { Weapons } from "data/equipments/Weapon"
import { EquipmentCard } from "./components/EquipmentCard"
import { StatsDetail } from "models/StatsDetail"
import { EquipSets } from "data/sets/Sets"
import { useLocalStorage } from "react-use"
import ESSerializer from 'esserializer'
import { EffectStats } from "models/EffectStats"
import { Line } from "data/potential"
import { Button } from "primereact/button"
import { AncientBowExpertise, AncientBowExpertiseWithCO, AncientBowExpertiseWithDCO, AncientBowMastery, JobDefaultBuff, MapleWarrior, MapleWarriorWithCO, MapleWarriorWithDCO } from "data/skills"
import { Fieldset } from "primereact/fieldset"
import { Tooltip } from "primereact/tooltip"
import { BuffSelectionDialog } from "./components/BuffSelectionDialog"
import { ArcaneSymbol, SacredSymbol } from "data/Symbol"
import { InputNumber } from "primereact/inputnumber"

const StatRow = styled.tr``
const StatName = styled.td``
const StatVal = styled.td``
const BuffIconContainer = styled.div`
  position:relative;
  width: 32px;
  height: 32px;
  line-height: 32px;
  display: inline-block;
  margin: 2px;
  img {
    width:100%;
    vertical-align:top;
  }
  /* &:after {
    content:'X';
    color:#fff;
    position: absolute;
    width: 100%; 
    height: 100%;
    margin: auto;
    vertical-align: center;
    text-align: center;
    top:0; 
    left:0;
    background:rgba(0,0,0,0.6);
    opacity:0;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
  }
  &:hover:after {
    opacity:1;
  } */
`

const SymbolContainer = styled.div`
  width: 200px;
  justify-content: center;
  align-content: center;
  text-align: center;
  margin: 0 5px;
`

const EquipmentsOptions = [
  {name: 'weapon' ,slot: 'weapon', options: Weapons},
  {name: 'totem1' ,slot: 'totem', options: Totems},
  {name: 'totem2' ,slot: 'totem', options: Totems},
  {name: 'totem3' ,slot: 'totem', options: Totems},
  {name: 'sub-weapon' ,slot: 'sub-weapon', options: SubWeapons},
  {name: 'hat' ,slot: 'hat', options: Hats},
  {name: 'top' ,slot: 'top', options: Tops},
  {name: 'bottom' ,slot: 'bottom', options: Bottoms},
  {name: 'glove' ,slot: 'glove', options: Gloves},
  {name: 'shoe' ,slot: 'shoe', options: Shoes},
  {name: 'belt' ,slot: 'belt', options: Belts},
  {name: 'cape' ,slot: 'cape', options: Capes},
  {name: 'shoulder' ,slot: 'shoulder', options: Shoulders},
  {name: 'pocket' ,slot: 'pocket', options: Pockets},
  {name: 'badge' ,slot: 'badge', options: Badges},
  {name: 'eye' ,slot: 'eye', options: Eyes},
  {name: 'face' ,slot: 'face', options: Faces},
  {name: 'pendant1' ,slot: 'pendant', options: Pendants},
  {name: 'pendant2' ,slot: 'pendant', options: Pendants},
  {name: 'earring' ,slot: 'earring', options: Earrings},
  {name: 'ring1' ,slot: 'ring', options: Rings},
  {name: 'ring2' ,slot: 'ring', options: Rings},
  {name: 'ring3' ,slot: 'ring', options: Rings},
  {name: 'ring4' ,slot: 'ring', options: Rings},
  {name: 'medal' ,slot: 'medal', options: Medals},
  {name: 'heart' ,slot: 'heart', options: Hearts},
  {name: 'overall' ,slot: 'overall', options: Overalls},
  {name: 'emblem', slot: 'emblem', options: Emblems},
]

// ignore xenon and demon avenger
const baseStats = (job: Job, level: number) => {
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
  const mastery = JobDefaultMastery[job]
  const multiplier = 1.35
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
  const finalDamage = 100
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

const calculateStatValue = (str: number, dex: number, int: number, luk: number, hp: number, job: Job) => {
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

const applySymbol = (stats: StatsDetail, sac: number[], arc: number[], job: Job) => {
  let mainStatFinalDiff = 0
  sac.forEach((l) =>{
    if(l === 0) return
    mainStatFinalDiff += (l * 200) + 300
  })
  arc.forEach((l) => {
    if(l === 0) return
    mainStatFinalDiff += (l * 100) + 200
  })
  if(Warrior.has(job) || StrPirate.has(job)) {
    stats.finalStr += mainStatFinalDiff
  } else if(Bowman.has(job) || DexPirate.has(job)) {
    stats.finalDex += mainStatFinalDiff
  } else if(Mage.has(job)){
    stats.finalInt += mainStatFinalDiff
  }else if(Thief.has(job)) {
    stats.finalLuk += mainStatFinalDiff
  }
  
  return stats
}

export const Page: React.FC = ({ }) => {
  const [ level, setLevel ] = useLocalStorage('calc.level', 10)
  const [ job, setJob ] = useLocalStorage<Job>('calc.job', 'Pathfinder')
  if(level === undefined) {
    setLevel(10)
  }
  if(job === undefined) {
    setJob('Pathfinder')
  }
  const [ buffDialogVisible, setBuffDialogVisible ] = useState(false)
  const { t } = useTranslation()
  const [ buffs, setBuffs ] = useLocalStorage<Buff[]>('calc.buff', [], {
    raw: false,
    serializer: (buffs) => ESSerializer.serialize(buffs),
    deserializer: (buffString) => ESSerializer.deserialize(buffString, [GeneralBuff, Buff, EffectStats, AncientBowMastery, MapleWarrior, MapleWarriorWithCO, MapleWarriorWithDCO, AncientBowExpertise, AncientBowExpertiseWithCO, AncientBowExpertiseWithDCO])
  })
  const [ arc, setArc ] = useLocalStorage('calc.arc', new Array(6).fill(0))
  const [ sac, setSac ] = useLocalStorage('calc.sac', new Array(6).fill(0))
  const equipments = EquipmentsOptions.map((e) => {
    const [equipment, setEquipment] = useLocalStorage(`calc.${e.name}`, new Equipment(''), {
      raw: false,
      serializer: (equipment) => ESSerializer.serialize(equipment),
      deserializer: (equipmentString) => ESSerializer.deserialize(equipmentString, [Equipment, EffectStats, Line])
    })
    if(equipment === undefined) setEquipment(new Equipment(''))
    return {...e, equipment: equipment, setEquipment: setEquipment}
  })
  const setJobDefaultBuff = () => {
    setBuffs(JobDefaultBuff[job!])
  }

  // pure stats
  let stats = baseStats(job!, level!)

  console.log('base stats:', stats)
  // need to apply godness's blessing with combat order
  const BuffBeforEquip = buffs!.filter((b) => b.order < 1000).sort((a, b) => a.order - b.order)
  const BuffAfterEquip = buffs!.filter((b) => b.order > 999).sort((a, b) => a.order - b.order)
  for(const buff of BuffBeforEquip) {
    stats = buff.apply(stats)
  }
  // console.log('after buff before equip:', stats)

  const sets = new Map()
  for(const { equipment } of equipments) {
    stats = ApplyEquipment(stats, equipment!)
    if(equipment!.set === '') continue
    sets.set(equipment!.set, (sets.get(equipment!.set) ?? 0) + 1)
  }
  // console.log('after equip:', stats)

  sets.forEach((count, set) => {
    stats = EquipSets.get(set)?.apply(stats, count) ?? stats
  })
  // console.log('after set:', stats)

  for(const buff of BuffAfterEquip) {
    stats = buff.apply(stats)
  }
  stats = applySymbol(stats, sac!, arc!, job!)

  // console.log('after buff:', stats)
  const [str, dex, int, luk, hp, mp, att, matt] = calcStats(stats)

  // stat value
  const statValue = calculateStatValue(str, dex, int, luk, hp, job!)
  const upperActual = stats.multiplier * statValue * att / 100
  const lowerActual = stats.mastery * upperActual
  const drMax = upperActual * (1 + stats.damage / 100) * (stats.finalDamage / 100)
  const drMin = lowerActual * (1 + stats.damage / 100) * (stats.finalDamage / 100)
  return <>
    <table>
      <tbody>
        <StatRow>
          <StatName>{t('calc.job')}</StatName>
          <StatVal>
            <select value={job} onChange={(e) => setJob(e.target.value as Job)}>
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
          <StatVal>{stats.finalDamage - 100}%</StatVal>
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
          <StatName>{t('calc.cr')}</StatName>
          <StatVal>{stats.critRate}%</StatVal>
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
          <StatVal>{equipments.reduce((prev, current) => prev + current.equipment!.starForce, 0)}%</StatVal>
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
    <Fieldset legend={t('calc.buffs')}>
      {
        buffs!.map((buff, index) => {
          return <>
            <Tooltip target={`.buff${index}`} />
            <BuffIconContainer className="buff">
              <img
                onClick={(e) => {
                  e.preventDefault()
                  setBuffs(buffs!.filter((b) => b.name != buff.name))
                }}
                src={`data:image/png;base64,${buff.icon}`}
                className={`buff${index}`}
                data-pr-tooltip={buff.tips !== '' ? `${buff.name}\n${buff.tips}` : `${buff.name}`}
                data-pr-position="right"
                data-pr-at="right+5 top"
                data-pr-my="left center-2" 
              />
            </BuffIconContainer>
          </>
        })
      }
    </Fieldset>
    <BuffSelectionDialog onHide={() => setBuffDialogVisible(false)} header={t('calc.add-buff')} visible={buffDialogVisible} buffs={buffs} setBuffs={setBuffs} />
    <Button onClick={setJobDefaultBuff}>{t('calc.set-job-buff')}</Button>
    <Button onClick={() => setBuffDialogVisible(true)} >{t('calc.add-buff')}</Button>
    <Fieldset legend={t('arc')}>
      <div className='card flex'>
        {
          arc!.map((v, i) => <SymbolContainer className='card flex flex-column' key={`arcane${i}`}>
            <b>{ArcaneSymbol[i].name}</b>
            <img width={200} height={200} src={`data:image/png;base64,${ArcaneSymbol[i].icon}`} alt={ArcaneSymbol[i].name} />
            <InputNumber inputStyle={{width: '5rem'}} maxFractionDigits={0} value={v} onValueChange={(e) => setArc([...arc!.slice(0, i), e.value, ...arc!.slice(i + 1)])} showButtons min={0} max={20} />
          </SymbolContainer>)
        }
      </div>
    </Fieldset>
    <Fieldset legend={t('sac')}>
      <div className='card flex'>
        {
          sac!.map((v, i) => <SymbolContainer className='card flex flex-column' key={`sac${i}`}>
            <b>{SacredSymbol[i].name}</b>
            <img width={200} height={200} src={`data:image/png;base64,${SacredSymbol[i].icon}`} alt={SacredSymbol[i].name} />
            <InputNumber inputStyle={{width: '5rem'}} maxFractionDigits={0} value={v} onValueChange={(e) => setSac([...sac!.slice(0, i), e.value, ...sac!.slice(i + 1)])} showButtons min={0} max={20} />
          </SymbolContainer>)
        }
      </div>
    </Fieldset>{
      equipments.map((equip) => <EquipmentCard
        key={equip.name} 
        {...equip}
      />)
    }
  </>
}