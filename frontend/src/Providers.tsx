import React from 'react'
import i18n from './i18n'
import { BrowserRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import { PrimeReactProvider } from "primereact/api"
import "primereact/resources/themes/lara-light-cyan/theme.css"

interface Props {
  children: React.ReactNode
}

export const Providers: React.FC<Props> = ({ children }) => (
  <PrimeReactProvider>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        {children}
      </BrowserRouter>
    </I18nextProvider>
  </PrimeReactProvider>
)
