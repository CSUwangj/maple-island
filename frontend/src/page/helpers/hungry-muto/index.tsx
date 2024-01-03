import React from 'react'
import recipes from './images'

export const Page: React.FC = () => {

  return <>
    {recipes.filter((r) => r.name !== 'hungry_muto_map').map((r) => <img src={r.image} key={r.name.replace('_', ' ')} alt={r.name.replace('_', ' ')} id={r.name}/>)}
    <img src={recipes.filter((r) => r.name === 'hungry_muto_map')[0].image} alt='whole map' />
  </>
}