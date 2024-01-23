import { Equipment } from 'models/Equipment'
import { Dropdown } from 'primereact/dropdown'
import React, { useState } from 'react'
import 'primeflex/primeflex.css'
import 'primereact/resources/primereact.css'
import { useTranslation } from 'react-i18next'
import { Button } from 'primereact/button'
import { Fieldset } from 'primereact/fieldset'
import { InputNumber } from 'primereact/inputnumber'
import { Splitter, SplitterPanel } from 'primereact/splitter'
import { FlameInputDialog } from './FlameDialog'
import _ from 'lodash'

interface Props {
  equipment: Equipment | undefined
  setEquipment: React.Dispatch<React.SetStateAction<Equipment | undefined>>
  name: string
  options: Equipment[]
}

const EquipmentOptionTemplate = (option: Equipment) => {
  return <div className="flex align-items-center">
    <img alt={option.name} src={`data:image/png;base64,${option.icon}`} style={{ width: '30px' }} />
    <div>{option.name}</div>
  </div>
}

export const EquipmentCard: React.FC<Props> = ({equipment, setEquipment, name, options}) => {
  const { t } = useTranslation()
  let maxSF = 5
  if(equipment!.level > 137) {
    maxSF = 25
  } else if (equipment!.level > 127) {
    maxSF = 20
  } else if (equipment!.level > 117) {
    maxSF = 15
  } else if (equipment!.level > 107) {
    maxSF = 10
  } else if (equipment!.level > 94) {
    maxSF = 8
  }
  const statsSummary = equipment!.statsSummary
  const [ flameDialogVisible, setFlameDialogVisible ] = useState(false)

  return <>
    <FlameInputDialog header={`Set ${equipment!.name}'s flame`} onHide={() => setFlameDialogVisible(false)} visible={flameDialogVisible} equipment={equipment!} setEquipment={setEquipment} />
    <Fieldset legend={name} className='card flex flex-wrap gap-3 p-fluid'>
      <Splitter>
        <SplitterPanel className='flex flex-column'>
          <img alt={equipment!.name} src={`data:image/png;base64,${equipment!.icon}`} style={{ width: '90px' }} />
          <Dropdown value={equipment} filter placeholder={equipment!.name} onChange={(e) => setEquipment(e.target.value)} options={options} optionLabel='name' itemTemplate={EquipmentOptionTemplate} />
          <div className="card flex flex-row flex-wrap gap-3 p-fluid">
            <div className='flex-auto'>
              <label htmlFor={`sf${name}`} className="font-bold block mb-2" >{t('calc.star-force')}</label>
              <InputNumber disabled={!equipment!.canSF} showButtons inputId={`sf${name}`} min={0} max={maxSF} maxFractionDigits={0} onValueChange={(e) => {
                const newEquipment = _.cloneDeep(equipment)
                newEquipment!.applyStarForce(e.value??0)
                setEquipment(newEquipment)
              }}/>
            </div>
            <div className='flex-auto'>
              <Button disabled={!equipment!.canPot}>{t('calc.set-potential')}</Button>
            </div>
            <div className='flex-auto'>
              <Button disabled={!equipment!.canFlame} onClick={() => {
                setFlameDialogVisible(true)
              }}>{t('calc.set-flame')}</Button>
            </div>
          </div>
        </SplitterPanel>
        <SplitterPanel>
          { statsSummary.str ? <div>{t('calc.str')}: +{statsSummary.str}</div> : <></>}
          { statsSummary.dex ? <div>{t('calc.dex')}: +{statsSummary.dex}</div> : <></>}
          { statsSummary.int ? <div>{t('calc.int')}: +{statsSummary.int}</div> : <></>}
          { statsSummary.luk ? <div>{t('calc.luk')}: +{statsSummary.luk}</div> : <></>}
          { statsSummary.hp ? <div>{t('calc.hp')}: +{statsSummary.hp}</div> : <></>}
          { statsSummary.mp ? <div>{t('calc.mp')}: +{statsSummary.mp}</div> : <></>}
          { statsSummary.hpPercent ? <div>{t('calc.hpp')}: +{statsSummary.hpPercent}%</div> : <></>}
          { statsSummary.mpPercent ? <div>{t('calc.mpp')}: +{statsSummary.mpPercent}%</div> : <></>}
          { statsSummary.att ? <div>{t('calc.att')}: +{statsSummary.att}</div> : <></>}
          { statsSummary.matt ? <div>{t('calc.matt')}: +{statsSummary.matt}</div> : <></>}
          { statsSummary.attPercent ? <div>{t('calc.atp')}: +{statsSummary.attPercent}%</div> : <></>}
          { statsSummary.mattPercent ? <div>{t('calc.matp')}: +{statsSummary.mattPercent}%</div> : <></>}
          { statsSummary.allStatPercent ? <div>{t('calc.asp')}: +{statsSummary.allStatPercent}%</div> : <></>}
          { statsSummary.defence ? <div>{t('calc.def')}: +{statsSummary.defence}</div> : <></>}
          { statsSummary.ignoreEnemyDefence ? <div>{t('calc.ied')}: +{statsSummary.ignoreEnemyDefence}%</div> : <></>}
          { statsSummary.damage ? <div>{t('calc.dmg')}: +{statsSummary.damage}%</div>: <></>}
          { statsSummary.bossDamage ? <div>{t('calc.bd')}: +{statsSummary.bossDamage}%</div> : <></>}
          { statsSummary.normalDamage ? <div>{t('calc.nmd')}: +{statsSummary.normalDamage}%</div>: <></>}
          { statsSummary.critDamage ? <div>{t('calc.cd')}: +{statsSummary.critDamage}%</div> : <></>}
          { statsSummary.critRate ? <div>{t('calc.cr')}: +{statsSummary.critRate}%</div> : <></>}
        </SplitterPanel>
      </Splitter>
    </Fieldset>
  </>
}