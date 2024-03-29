import { useLiveQuery } from 'dexie-react-hooks'
import { db } from 'models/db'
import { Button } from 'primereact/button'
import { ConfirmDialog } from 'primereact/confirmdialog'
import { Fieldset } from 'primereact/fieldset'
import { InputText } from 'primereact/inputtext'
import { Toast } from 'primereact/toast'
import React, { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { CharacterCard } from './components/CharacterCard'

const addCharacter = async (name: string, e: React.FormEvent<HTMLFormElement>, toast: React.RefObject<Toast>) => {
  e.preventDefault()
  toast.current?.show({ severity: 'info', summary: 'Updating', detail: `Adding character "${name}"`, life: 3000 })
  const r = await fetch(`${process.env.REACT_APP_API_HOST}/character/info/GMS/${name}`, {
    method:"GET",
    headers: {
      Accept: 'application/json',
    },
  })
  const j = await r.json()
  const record = await db.character.get({name})
  if(record) {
    const id = await db.character.where('name').equals(name).modify({
      name,
      level: j.CharacterData.Level,
      image: "data:image/png;base64," + j.CharacterData.Image,
      job: j.CharacterData.Class
    })
    console.log(`successfully update character with id ${id}`)
  } else {
    const id = await db.character.add({
      name,
      level: j.CharacterData.Level,
      image: "data:image/png;base64," + j.CharacterData.Image,
      job: j.CharacterData.Class
    })
    console.log(`successfully add character with id ${id}`)
  }
  toast.current?.show({severity: 'success', summary: 'Success', detail: `You have added/updated character "${name}"`, life: 3000})
}

const removeCharacter = async(name: string) => {
  await db.character.where('name').equals(name).delete()
}
const updateCharacter = async(name: string, callback?: () => void) => {
  const r = await fetch(`${process.env.REACT_APP_API_HOST}/character/info/GMS/${name}`, {
    method:"GET",
    headers: {
      Accept: 'application/json',
    },
  })
  const j = await r.json()
  const id = await db.character.where('name').equals(name).modify({
    name,
    level: j.CharacterData.Level,
    image: "data:image/png;base64," + j.CharacterData.Image,
    job: j.CharacterData.Class
  })
  console.log(`successfully update character with id ${id}`)
  callback?.()
}

export const Page: React.FC = ({ }) => {
  const [name, setName] = useState('')
  const toast = useRef<Toast>(null)
  const { t } = useTranslation()
  const characters = (useLiveQuery(() => db.character.toArray()) ?? []).sort((a, b) => a.name.localeCompare(b.name))

  const resetCharacter = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent> ) => {
    e.preventDefault()
    await db.character.clear()
  }
  return <>
    <Toast ref={toast} />
    <ConfirmDialog />
    <form onSubmit={(e) => addCharacter(name, e, toast)}>
      <Fieldset>
        <legend>{t('legion.add-char')}</legend>
        <InputText value={name} onChange={(e) => setName(e.target.value)} />
        <Button type='submit'>{t('submit')}</Button>
      </Fieldset>
      <Button type='reset' onClick={resetCharacter}>{t('reset')}</Button><br />
    </form>
    <div>
      {
        characters.map((char, index) => (<CharacterCard 
          onRemove={removeCharacter}
          onUpdate={updateCharacter}
          toast={toast}
          {...char}
          key={index}
        />))
      }
    </div>
  </>
}