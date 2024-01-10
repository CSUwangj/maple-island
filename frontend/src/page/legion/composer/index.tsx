/* eslint-disable @typescript-eslint/no-non-null-assertion */
import styled from '@emotion/styled/macro'
import { useLiveQuery } from 'dexie-react-hooks'
import { db } from 'models/db'
import React, { CSSProperties, useCallback, useState } from 'react'
import { useDrag, useDrop, XYCoord } from 'react-dnd'
import background from './images/henesys hunting ground.jpg'

const DragType = {
  CHAR: 'character'
}

interface CharacterModelProps {
  name: string
  image: string
  inBackground: boolean
  left?: number
  top?: number
}

const NameBox = styled.div`
  background: rgba(0, 0, 0, 0.6);
  color: rgb(255, 255, 255);
  padding: 1px 3px;
  font-size: 14px;
  text-align: center;
  margin-top: -9px;
  font-family: 'Arial';
`

const Container = styled.div`
  display: flex;
`

const ListedUnusedCharacters = styled.div`
  min-width: 100px;
  height: 500px;
  border: 1px;
`

const Background = styled.div``

const CharacterModel: React.FC<CharacterModelProps> = ({name, image, inBackground, left, top}) => {
  const [ { isDragging }, ref ] = useDrag(
    () => ({
      type: DragType.CHAR,
      item: { name, image, left, top },
      collect: (monitor) => ({ isDragging : monitor.isDragging()})
    }),
    [name, image, left, top]
  )
  const styles: CSSProperties = inBackground ? { position : 'absolute', left, top } : {}

  return isDragging ? <div ref={ref}></div> : <div 
    ref={ref}
    style={{
      ...styles,
      'display': 'flex',
      'alignItems': 'center',
      'justifyContent': 'center',
      'flexDirection': 'column',
    }}
  >
    <img src={image} />
    <NameBox>{name}</NameBox>
  </div>
}

export const Page: React.FC = () => {
  const characters = (useLiveQuery(() => db.character.toArray()) ?? []).sort((a, b) => a.name.localeCompare(b.name)).map(({image, name}) => ({image, name, inBackground: false}))
  const [ listedCharacters, setListedCharacters ] = useState<CharacterModelProps[]>([])
  const moveChar = useCallback(
    (name: string, left: number, top: number) => {
      console.log(left, top, name)
      setListedCharacters(
        listedCharacters.map((char) => char.name === name ? {...char, left, top} : char)
      )
    },
    [listedCharacters, setListedCharacters]
  )
  const [, drop] = useDrop(
    () => ({
      accept: DragType.CHAR,
      drop: (char: CharacterModelProps, monitor) => {
        if(listedCharacters.findIndex(c => c.name === char.name) === -1) {
          setListedCharacters([...listedCharacters, {...char, inBackground: true, top: 20, left: 20}])
        } else {
          const delta = monitor.getDifferenceFromInitialOffset() as XYCoord
          const left = Math.round(char.left! + delta.x)
          const top = Math.round(char.top! + delta.y)
          moveChar(char.name, left, top)
        }
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      })
    }),
    [moveChar]
  )

  return <Container>
    <ListedUnusedCharacters>
      {
        characters.filter((c) => listedCharacters.find(ch => ch.name === c.name) === undefined).map((c) => <CharacterModel {...c} key={c.name} />)
      }
    </ListedUnusedCharacters>
    <Background ref={drop} style={{position: 'relative'}}>
      <img src={background} />
      {
        listedCharacters.map((c) => <CharacterModel {...c} key={c.name} />) 
      }
    </Background>
  </Container>
}