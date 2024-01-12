
import React, { Suspense } from 'react'
import { Route, Routes as ReactRoutes } from 'react-router-dom'
import { Page as Index } from 'page/index'
import { Page as Legion } from 'page/legion'
import { Page as Solver } from "page/legion/solver"
import { Page as Composer } from 'page/legion/composer'
import { Page as MidnightChaserHelper } from 'page/helpers/midnight-chaser'
import { Page as HungryMutoHelper } from 'page/helpers/hungry-muto'
import { Page as EsferaGuardianHelper } from 'page/helpers/esfera-guardian'

export const Routes: React.FC = () => {
  return <Suspense fallback={ <div>faild</div> }>
    <ReactRoutes>
      <Route path='/' element=<Index />/>
      <Route path='/legion'  element=<Legion />/>
      <Route path='/legion/solver' element=<Solver />/>
      <Route path='/legion/composer' element=<Composer />/>
      <Route path='/helper/midnight-chaser' element=<MidnightChaserHelper />/>
      <Route path='/helper/hungry-muto' element=<HungryMutoHelper />/>
      <Route path='/helper/esfera-guardian' element=<EsferaGuardianHelper />/>
    </ReactRoutes>
  </Suspense>
}