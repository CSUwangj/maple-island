/* eslint-disable @typescript-eslint/no-non-null-assertion */
import _ from 'lodash'
import { EffectStats } from 'models/EffectStats'
import { Equipment } from 'models/Equipment'
import { ConfirmDialog, ConfirmDialogProps } from 'primereact/confirmdialog'
import { InputNumber } from 'primereact/inputnumber'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

interface SoulDialogProps {
  equipment: Equipment | undefined
  setEquipment: React.Dispatch<React.SetStateAction<Equipment | undefined>>
}

export const SoulInputDialog: React.FC<ConfirmDialogProps & SoulDialogProps> = ({equipment, setEquipment,...props}) => {
  const [stats, setStats] = useState(new EffectStats())
  const { t } = useTranslation()
  const SoulInput = <>
    <div>
      {t('calc.soul-att-tip')}
    </div>
    <div>
      <label htmlFor='str'>{t('calc.str')}</label>
      <InputNumber min={0} allowEmpty={false} inputId='str' value={stats.str} onValueChange={(e) => {
        const newStats = _.cloneDeep(stats)
        newStats.str = e.value ?? 0
        setStats(newStats)
      }}/>
    </div>
    <div>
      <label htmlFor='dex'>{t('calc.dex')}</label>
      <InputNumber min={0} allowEmpty={false} inputId='dex' value={stats.dex} onValueChange={(e) => {
        const newStats = _.cloneDeep(stats)
        newStats.dex = e.value ?? 0
        setStats(newStats)
      }}/>
    </div>
    <div>
      <label htmlFor='int'>{t('calc.int')}</label>
      <InputNumber min={0} allowEmpty={false} inputId='int' value={stats.int} onValueChange={(e) => {
        const newStats = _.cloneDeep(stats)
        newStats.int = e.value ?? 0
        setStats(newStats)
      }}/>
    </div>
    <div>
      <label htmlFor='luk'>{t('calc.luk')}</label>
      <InputNumber min={0} allowEmpty={false} inputId='luk' value={stats.luk} onValueChange={(e) => {
        const newStats = _.cloneDeep(stats)
        newStats.luk = e.value ?? 0
        setStats(newStats)
      }}/>
    </div>
    <div>
      <label htmlFor='hp'>{t('calc.hp')}</label>
      <InputNumber min={0} allowEmpty={false} inputId='hp' value={stats.hp} onValueChange={(e) => {
        const newStats = _.cloneDeep(stats)
        newStats.hp = e.value ?? 0
        setStats(newStats)
      }}/>
    </div>
    <div>
      <label htmlFor='att'>{t('calc.att')}</label>
      <InputNumber min={0} allowEmpty={false} inputId='att' value={stats.att} onValueChange={(e) => {
        const newStats = _.cloneDeep(stats)
        newStats.att = e.value ?? 0
        setStats(newStats)
      }}/>
    </div>
    <div>
      <label htmlFor='matt'>{t('calc.matt')}</label>
      <InputNumber min={0} allowEmpty={false} inputId='matt' value={stats.matt} onValueChange={(e) => {
        const newStats = _.cloneDeep(stats)
        newStats.matt = e.value ?? 0
        setStats(newStats)
      }}/>
    </div>
    <div>
      <label htmlFor='attPercent'>{t('calc.att')}</label>
      <InputNumber min={0} allowEmpty={false} inputId='attPercent' suffix='%' value={stats.attPercent} onValueChange={(e) => {
        const newStats = _.cloneDeep(stats)
        newStats.attPercent = e.value ?? 0
        setStats(newStats)
      }}/>
    </div>
    <div>
      <label htmlFor='mattPercent'>{t('calc.matt')}</label>
      <InputNumber min={0} allowEmpty={false} inputId='mattPercent' suffix='%' value={stats.mattPercent} onValueChange={(e) => {
        const newStats = _.cloneDeep(stats)
        newStats.mattPercent = e.value ?? 0
        setStats(newStats)
      }}/>
    </div>
    <div>
      <label htmlFor='percentAllStat'>{t('calc.asp')}</label>
      <InputNumber min={0} allowEmpty={false} suffix='%' inputId='percentAllStat' value={stats.percentAllStat} onValueChange={(e) => {
        const newStats = _.cloneDeep(stats)
        newStats.percentAllStat = e.value ?? 0
        setStats(newStats)
      }}/>
    </div>
    <div>
      <label htmlFor='ignoreEnemyDefence'>{t('calc.ied')}</label>
      <InputNumber min={0} allowEmpty={false} suffix='%' inputId='ignoreEnemyDefence' value={stats.ignoreEnemyDefence} onValueChange={(e) => {
        const newStats = _.cloneDeep(stats)
        newStats.ignoreEnemyDefence = e.value ?? 0
        setStats(newStats)
      }}/>
    </div>
    <div>
      <label htmlFor='bossDamage'>{t('calc.bd')}</label>
      <InputNumber min={0} allowEmpty={false} suffix='%' inputId='bossDamage' value={stats.bossDamage} onValueChange={(e) => {
        const newStats = _.cloneDeep(stats)
        newStats.bossDamage = e.value ?? 0
        setStats(newStats)
      }}/>
    </div>
    <div>
      <label htmlFor='critRate'>{t('calc.cr')}</label>
      <InputNumber min={0} allowEmpty={false} suffix='%' inputId='critRate' value={stats.critRate} onValueChange={(e) => {
        const newStats = _.cloneDeep(stats)
        newStats.critRate = e.value ?? 0
        setStats(newStats)
      }}/>
    </div>
  </>
  const accept = () => {
    const newEquipment = _.cloneDeep(equipment)
    newEquipment!.setSoul(stats)
    setEquipment(newEquipment)
  }

  return <ConfirmDialog modal={true} message={SoulInput} {...props} accept={accept} />
}
