import { useLiveQuery } from 'dexie-react-hooks'
import { db } from 'models/db'
import { Button } from 'primereact/button'
import { Fieldset } from 'primereact/fieldset'
import { InputText } from 'primereact/inputtext'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

// interface Props {
//   children: React.ReactNode
// }

export const Page: React.FC = ({ }) => {
  const [name, setName] = useState("")
  const { t } = useTranslation()
  const characters = useLiveQuery(() => db.character.toArray()) ?? []
  const addCharacter = async (e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault()
    const r = await fetch("http://124.221.81.131:10019/GMS/" + name, {
      method:"GET",
      headers: {
        Accept: 'application/json',
      },
    })
    const j = await r.json()
    const img = j.CharacterData.CharacterImageURL.split('/').slice(-1)
    const t = await (await fetch("http://124.221.81.131:10019/" + img)).text()
    const id = await db.character.put({
      name,
      level: j.CharacterData.Level,
      image: "data:image/png;base64," + t,
      job: j.CharacterData.Class
    })
    console.log(`successfully add character with id ${id}`)
  }
  const resetCharacter = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent> ) => {
    e.preventDefault()
    await db.character.clear()
  }
  return <>
    <form onSubmit={addCharacter}>
      <Fieldset>
        <legend>{t('legion.add-char')}</legend>
        <InputText value={name} onChange={(e) => setName(e.target.value)} />
        <Button type='submit'>{t('submit')}</Button>
      </Fieldset>
      <Button type='reset' onClick={resetCharacter}>{t('reset')}</Button><br />
      {
        characters.map(char => (<>
          <img src={char.image} key={char.name} />
          <p>{char.name}</p>
          <p>{char.level}</p>
          <p>{char.job}</p>
        </>
        ))
      }
    </form>
  </>
}