
import React, { Suspense } from 'react'
import { Route, Routes as ReactRoutes } from 'react-router-dom'
import { Page as Index } from 'page/index'

export const Routes: React.FC = () => {
  return <Suspense fallback={ <div>faild</div> }>
    <ReactRoutes>
      <Route path='/' element=<Index />/>
    </ReactRoutes>
  </Suspense>
}