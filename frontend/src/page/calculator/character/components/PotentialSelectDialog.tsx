import { Line, Lines, UselessLine } from 'data/potential'
import { Equipment } from 'models/Equipment'
import { ConfirmDialog, ConfirmDialogProps } from 'primereact/confirmdialog'
import { Dropdown } from 'primereact/dropdown'
import React, { useState } from 'react'
import { useLocalStorage } from 'react-use'
import ESSerializer from 'esserializer'
import { EffectStats } from 'models/EffectStats'
import _ from 'lodash'

interface PotentialDialogProps {
  equipment: Equipment | undefined
  setEquipment: React.Dispatch<React.SetStateAction<Equipment | undefined>>
}

export const PotentialSelectDialog: React.FC<ConfirmDialogProps & PotentialDialogProps> = ({equipment, setEquipment, ...props}) => {
  const [potentials, setPotentials] = useState(new Array(3).fill(0).map(__ => _.cloneDeep(UselessLine)))
  const PotentialSelection = <>
    {
      potentials?.map((_, index) => <Dropdown filter value={potentials[index]} key={`${equipment?.name}-pot-line${index}`} options={Lines} optionLabel='description' onChange={(e) => {
        setPotentials([...potentials.slice(0, index), e.target.value, ...potentials.slice(index + 1)])
      }}/>)
    }
  </>

  const accept = () => {
    const newEquipment = _.cloneDeep(equipment)
    newEquipment!.setPotential(potentials)
    setEquipment(newEquipment)
  }

  return <ConfirmDialog {...props} modal={true} message={PotentialSelection} accept={accept} />
}