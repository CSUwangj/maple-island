import _ from 'lodash'
import { eq } from 'lodash'
import { EffectStats } from 'models/EffectStats'
import { Equipment } from 'models/Equipment'
import { ConfirmDialog, ConfirmDialogProps } from 'primereact/confirmdialog'
import { InputNumber } from 'primereact/inputnumber'
import { InputText } from 'primereact/inputtext'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

interface FlameDialogProps {
  equipment: Equipment
  setEquipment: React.Dispatch<React.SetStateAction<Equipment>>
}

export const FlameInputDialog: React.FC<ConfirmDialogProps & FlameDialogProps> = ({equipment, setEquipment,...props}) => {
  const [stats, setStats] = useState(new EffectStats())
  const { t } = useTranslation()
  const FlameInput = <>
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
      <label htmlFor='mp'>{t('calc.mp')}</label>
      <InputNumber min={0} allowEmpty={false} inputId='mp' value={stats.mp} onValueChange={(e) => {
        const newStats = _.cloneDeep(stats)
        newStats.mp = e.value ?? 0
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
      <label htmlFor='allStatPercent'>{t('calc.asp')}</label>
      <InputNumber min={0} allowEmpty={false} inputId='allStatPercent' value={stats.allStatPercent} onValueChange={(e) => {
        const newStats = _.cloneDeep(stats)
        newStats.allStatPercent = e.value ?? 0
        setStats(newStats)
      }}/>
    </div>
    <div>
      <label htmlFor='defence'>{t('calc.def')}</label>
      <InputNumber min={0} allowEmpty={false} inputId='defence' value={stats.defence} onValueChange={(e) => {
        const newStats = _.cloneDeep(stats)
        newStats.defence = e.value ?? 0
        setStats(newStats)
      }}/>
    </div>
    <div>
      <label htmlFor='ignoreEnemyDefence'>{t('calc.ied')}</label>
      <InputNumber min={0} allowEmpty={false} inputId='ignoreEnemyDefence' value={stats.ignoreEnemyDefence} onValueChange={(e) => {
        const newStats = _.cloneDeep(stats)
        newStats.ignoreEnemyDefence = e.value ?? 0
        setStats(newStats)
      }}/>
    </div>
    <div>
      <label htmlFor='damage'>{t('calc.dmg')}</label>
      <InputNumber min={0} allowEmpty={false} inputId='damage' value={stats.damage} onValueChange={(e) => {
        const newStats = _.cloneDeep(stats)
        newStats.damage = e.value ?? 0
        setStats(newStats)
      }}/>
    </div>
    <div>
      <label htmlFor='bossDamage'>{t('calc.bd')}</label>
      <InputNumber min={0} allowEmpty={false} inputId='bossDamage' value={stats.bossDamage} onValueChange={(e) => {
        const newStats = _.cloneDeep(stats)
        newStats.bossDamage = e.value ?? 0
        setStats(newStats)
      }}/>
    </div>
    <div>
      <label htmlFor='normalDamage'>{t('calc.nmd')}</label>
      <InputNumber min={0} allowEmpty={false} inputId='normalDamage' value={stats.normalDamage} onValueChange={(e) => {
        const newStats = _.cloneDeep(stats)
        newStats.normalDamage = e.value ?? 0
        setStats(newStats)
      }}/>
    </div>
    <div>
      <label htmlFor='critDamage'>{t('calc.cd')}</label>
      <InputNumber min={0} allowEmpty={false} inputId='critDamage' value={stats.critDamage} onValueChange={(e) => {
        const newStats = _.cloneDeep(stats)
        newStats.critDamage = e.value ?? 0
        setStats(newStats)
      }}/>
    </div>
    <div>
      <label htmlFor='critRate'>{t('calc.cr')}</label>
      <InputNumber min={0} allowEmpty={false} inputId='critRate' value={stats.critRate} onValueChange={(e) => {
        const newStats = _.cloneDeep(stats)
        newStats.critRate = e.value ?? 0
        setStats(newStats)
      }}/>
    </div>
  </>
  const accept = () => {
    const newEquip = _.cloneDeep(equipment)
    newEquip.setFlame(stats)
    setEquipment(newEquip)
  }

  return <ConfirmDialog modal={true} message={FlameInput} {...props} accept={accept} />
}
