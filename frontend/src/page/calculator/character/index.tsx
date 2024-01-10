import styled from "@emotion/styled/macro"
import { Character } from "models/Character"
import { Equipment } from "models/Equipment"
import { GeneralBuffEffect } from "models/BuffEffect"
import React, { useState } from "react"
import { useTranslation } from "react-i18next"

const StatRow = styled.tr``
const StatName = styled.td``
const StatVal = styled.td``

export const Page: React.FC = ({ }) => {
  const [ level, setLevel ] = useState(0)
  const [ hp, setHp ] = useState(0)
  const [ mp, setMp ] = useState(0)
  const [ dmg, setDmg ] = useState(30)
  const [ bd, setBd ] = useState(0)
  const [ fd, setFd ] = useState(120.48)
  const [ buffd, setBuffd ] = useState(0)
  const [ ied, setIed ] = useState(0)
  const [ idr, setIdr ] = useState(0)
  const [ cr, setCr ] = useState(0)
  const [ mo, setMo ] = useState(0)
  const [ cd, setCd ] = useState(0)
  const [ AS, setAS ] = useState(0)
  const [ sr, setSr ] = useState(0)
  const [ kr, setKr ] = useState(0)
  const [ def, setDef ] = useState(0)
  const [ sf, setSf ] = useState(0)
  const [ speed, setSpeed ] = useState(0)
  const [ af, setAf ] = useState(0)
  const [ sacf, setSacf ] = useState(0)
  const [ jump, setJump ] = useState(0)
  const { t } = useTranslation()
  const [ equiptments, setEquipments ] = useState<Equipment[]>([])
  const [ buffs, setBuffs ] = useState<GeneralBuffEffect[]>([])

  // pure stats
  // let dex = level < 60 ? level * 5 + 4 :
  //   level < 100 ? level * 5 + 9 :
  //     level * 5 + 14
  let str = 1582
  let dex = 5096
  let int = 4
  let luk = 4
  let att = 691
  let matt = 0

  // added stats
  for(const equipment of equiptments) {
    dex += equipment.statsSummary.dex
    int += equipment.statsSummary.int
    str += equipment.statsSummary.str
    luk += equipment.statsSummary.luk
    att += equipment.statsSummary.att
    matt += equipment.statsSummary.matt
  }

  // percentage stats
  dex = Math.floor(dex * (100 + equiptments.map(e => e.statsSummary.dexPercent).reduce((s, p) => s + p, 0)) / 100)
  int = Math.floor(int * (100 + equiptments.map(e => e.statsSummary.intPercent).reduce((s, p) => s + p, 0)) / 100)
  str = Math.floor(str * (100 + equiptments.map(e => e.statsSummary.strPercent).reduce((s, p) => s + p, 0)) / 100)
  luk = Math.floor(luk * (100 + equiptments.map(e => e.statsSummary.lukPercent).reduce((s, p) => s + p, 0)) / 100)
  att = Math.floor(att * (100 + equiptments.map(e => e.statsSummary.attPercent).reduce((s, p) => s + p, 0)) / 100)
  matt = Math.floor(matt * (100 + equiptments.map(e => e.statsSummary.mattPercent).reduce((s, p) => s + p, 0)) / 100)

  // final stats increase
  
  // stat value
  const statValue = dex * 4 + str
  const upperActual = 1.30 /* weapon multiplier */ * statValue * att / 100
  const lowerActual = 0.85 /* weapon mastery */ * upperActual
  const drMax = upperActual * (1 + dmg / 100) * (1 + fd / 100)
  const drMin = lowerActual * (1 + dmg / 100) * (1 + fd / 100)
  return <table>
    <tbody>
      <StatRow>
        <StatName>{t('calc.lv')}</StatName>
        <StatVal>
          <input type='number' min={0} max={300} onChange={e => setLevel(parseInt(e.target.value))} value={level} />
        </StatVal>
      </StatRow>
      <StatRow>
        <StatName>{t('calc.str')}</StatName>
        <StatVal>{str}</StatVal>
      </StatRow>
      <StatRow>
        <StatName>{t('calc.dex')}</StatName>
        <StatVal>{dex}</StatVal>
      </StatRow>
      <StatRow>
        <StatName>{t('calc.int')}</StatName>
        <StatVal>{int}</StatVal>
      </StatRow>
      <StatRow>
        <StatName>{t('calc.luk')}</StatName>
        <StatVal>{luk}</StatVal>
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
        <StatVal>{drMin}~{drMax}</StatVal>
      </StatRow>
      <StatRow>
        <StatName>{t('calc.dmg')}</StatName>
        <StatVal>{dmg}%</StatVal>
      </StatRow>
      <StatRow>
        <StatName>{t('calc.bd')}</StatName>
        <StatVal>{bd}%</StatVal>
      </StatRow>
      <StatRow>
        <StatName>{t('calc.fd')}</StatName>
        <StatVal>{fd}%</StatVal>
      </StatRow>
      <StatRow>
        <StatName>{t('calc.buffd')}</StatName>
        <StatVal>{buffd}%</StatVal>
      </StatRow>
      <StatRow>
        <StatName>{t('calc.ied')}</StatName>
        <StatVal>{ied}%</StatVal>
      </StatRow>
      <StatRow>
        <StatName>{t('calc.idr')}</StatName>
        <StatVal>{idr}%</StatVal>
      </StatRow>
      <StatRow>
        <StatName>{t('calc.cr')}</StatName>
        <StatVal>{cr}%</StatVal>
      </StatRow>
      <StatRow>
        <StatName>{t('calc.mo')}</StatName>
        <StatVal>{mo}%</StatVal>
      </StatRow>
      <StatRow>
        <StatName>{t('calc.cd')}</StatName>
        <StatVal>{cd}%</StatVal>
      </StatRow>
      <StatRow>
        <StatName>{t('calc.as')}</StatName>
        <StatVal>{AS}</StatVal>
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
        <StatName>{t('calc.sr')}</StatName>
        <StatVal>{sr}</StatVal>
      </StatRow>
      <StatRow>
        <StatName>{t('calc.kr')}</StatName>
        <StatVal>{kr}%</StatVal>
      </StatRow>
      <StatRow>
        <StatName>{t('calc.def')}</StatName>
        <StatVal>{def}</StatVal>
      </StatRow>
      <StatRow>
        <StatName>{t('calc.sf')}</StatName>
        <StatVal>{sf}%</StatVal>
      </StatRow>
      <StatRow>
        <StatName>{t('calc.speed')}</StatName>
        <StatVal>{speed}%</StatVal>
      </StatRow>
      <StatRow>
        <StatName>{t('calc.af')}</StatName>
        <StatVal>{af}%</StatVal>
      </StatRow>
      <StatRow>
        <StatName>{t('calc.sacf')}</StatName>
        <StatVal>{sacf}%</StatVal>
      </StatRow>
      <StatRow>
        <StatName>{t('calc.jump')}</StatName>
        <StatVal>{jump}%</StatVal>
      </StatRow>
    </tbody>
  </table>
}