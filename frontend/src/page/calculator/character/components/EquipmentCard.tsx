import { Equipment } from 'models/Equipment'
import { Dropdown } from 'primereact/dropdown'
import React from 'react'
import 'primeflex/primeflex.css'
import 'primereact/resources/primereact.css'
import { InputText } from 'primereact/inputtext'

interface Props {
  equipment: Equipment
  setEquipment: (a: Equipment) => void
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
  let maxSF = 5
  if(equipment.level > 137) {
    maxSF = 25
  } else if (equipment.level > 127) {
    maxSF = 20
  } else if (equipment.level > 117) {
    maxSF = 15
  } else if (equipment.level > 107) {
    maxSF = 10
  } else if (equipment.level > 94) {
    maxSF = 8
  }
  return <fieldset>
    <legend>{name}</legend>
    <img alt={equipment.name} src={`data:image/png;base64,${equipment.icon}`} style={{ width: '90px' }} />
    <Dropdown value={equipment} filter onChange={(e) => setEquipment(e.target.value)} options={options} optionLabel='name' itemTemplate={EquipmentOptionTemplate} />
    {
      !equipment.canSF ? <></> : <InputText type='number' min={0} max={maxSF} onChange={(e) => {
        equipment.applyStarForce(parseInt(e.target.value))
        setEquipment(equipment)
      }} />
    }
  </fieldset>
}