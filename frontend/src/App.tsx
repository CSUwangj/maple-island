import React from 'react'
import './App.css'
import styled from '@emotion/styled/macro'
import { Providers } from 'Providers'
import { Routes } from 'route'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Div = styled.div`
  height: 100%;
`

export const App: React.FC = () => {
  const { t } = useTranslation()
  return <>
    <Providers>
      <Div className='app'>
        <div><Link to='/legion' >{t('legion-tracker')}</Link></div>
        <div><Link to='/legion/solver'>{t('legion-solver')}</Link></div>
        <div><Link to='/helper/midnight-chaser'>{t('midnight-chaser')}</Link></div>
        <div><Link to='/helper/hungry-muto'>{t('hungry-muto')}</Link></div>
        <div><Link to='/helper/esfera-guardian'>{t('esfera-guardian')}</Link></div>
        <Routes></Routes>
      </Div>
    </Providers>
  </>
}

export default App
