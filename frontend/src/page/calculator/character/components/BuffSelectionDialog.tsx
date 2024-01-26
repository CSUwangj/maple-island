import { Lines, UselessLine } from 'data/potential'
import { Equipment } from 'models/Equipment'
import { ConfirmDialog, ConfirmDialogProps } from 'primereact/confirmdialog'
import { Dropdown } from 'primereact/dropdown'
import React, { useState } from 'react'
import _ from 'lodash'
import { Buff } from 'models/BuffEffect'
import { Skills } from 'data/skills'

interface BuffDialogProps {
  buffs: Buff[] | undefined
  setBuffs: React.Dispatch<React.SetStateAction<Buff[] | undefined>>
}

const BuffOptionTemplate = (option: Buff) => {
  return <div className='flex align-item-center'>
    <img alt={option.name} src={`data:image/png;base64,${option.icon}`} style={{width: '32px'}} />
    <div>{option.name}</div>
  </div>
}

export const BuffSelectionDialog: React.FC<ConfirmDialogProps & BuffDialogProps> = ({buffs, setBuffs, ...props}) => {
  const [buff, setBuff] = useState(Skills[0])

  const BuffSelection = <Dropdown 
    onChange={(e) => setBuff(e.target.value)}
    options={Skills} 
    optionLabel='name' 
    itemTemplate={BuffOptionTemplate}
    filter 
  />

  const accept = () => {
    setBuffs(buffs!.filter((b) => b.name !== buff.name).concat([buff]))
  }
 

  return <ConfirmDialog {...props} modal={true} message={BuffSelection} accept={accept} />
}