import { Equipment } from 'models/Equipment'
import { Dropdown } from 'primereact/dropdown'
import React from 'react'
import 'primeflex/primeflex.css'
import 'primereact/resources/primereact.css'

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

export const EquipmentCard:React.FC<Props> = ({equipment, setEquipment, name, options}) => {
  return <fieldset>
    <legend>{name}</legend>
    <img alt={equipment.name} src={`data:image/png;base64,${equipment.icon}`} style={{ width: '90px' }} />
    <Dropdown value={equipment} filter onChange={(e) => setEquipment(e.target.value)} options={options} optionLabel='name' itemTemplate={EquipmentOptionTemplate} />
  </fieldset>
}