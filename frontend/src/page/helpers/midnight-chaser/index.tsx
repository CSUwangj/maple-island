import styled from '@emotion/styled/macro'
import React, { useState } from 'react'
import imgs from './images'

const Container = styled.div`
  width:630px;
  margin: 0 auto;
  gap: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  img {
    width:200px;
  }
`

export const Page: React.FC = () => {
  const [ funitures, setFunitures ] = useState(imgs)
  const swapBoxes = (fromFuniture: string, toFuniture: string) => {
    const furnitures = funitures.slice()
    const fromIndex = furnitures.findIndex((furniture) => furniture === fromFuniture) ?? -1
    const toIndex = furnitures.findIndex((furniture) => furniture === toFuniture) ?? -1

    if (fromIndex != -1 && toIndex != -1) {
      furnitures[fromIndex] = toFuniture
      furnitures[toIndex] = fromFuniture
      setFunitures(furnitures)
    }
  }

  const handleDragStart = (furniture: string) => (event: React.DragEvent<HTMLImageElement>) => {
    event.dataTransfer.setData("dragContent", furniture)
  }

  const handleDragOver = () => (event: React.DragEvent<HTMLImageElement>) => {
    event.preventDefault()
    return false
  }

  const handleDrop = (furniture: string) => (event: React.DragEvent<HTMLImageElement>) => {
    event.preventDefault()
    const fromBox = event.dataTransfer.getData("dragContent")
    const toFuniture = furniture
    swapBoxes(fromBox, toFuniture)
    return false
  }
  return <Container>
    {funitures.map((funiture, index) => <img 
      src={funiture} 
      key={index} 
      draggable={true}
      onDragOver={handleDragOver()}
      onDragStart={handleDragStart(funiture)}
      onDrop={handleDrop(funiture)}
    />)}
  </Container>
}