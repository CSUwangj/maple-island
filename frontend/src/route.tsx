
import React, { Suspense } from 'react'
import { Route, Routes as ReactRoutes } from 'react-router-dom'
import { Page as Index } from 'page/index'
import { Page as Legion } from 'page/legion'
import { Page as Solver } from "page/legion/solver"

export const Routes: React.FC = () => {
  return <Suspense fallback={ <div>faild</div> }>
    <ReactRoutes>
      <Route path='/' element=<Index />/>
      <Route path='/legion'  element=<Legion />/>
      <Route path='/legion/solver' element=<Solver />/>
    </ReactRoutes>
  </Suspense>
}