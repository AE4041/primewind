import React from 'react'
import ReactDOM from 'react-dom/client'
import { PrimeReactProvider } from 'primereact/api'
import { PrimeWind } from '../src'
import App from './App'
import '../src/index.css'

// @ts-ignore
ReactDOM.createRoot(document.getElementById('root')!).render(
    <PrimeReactProvider value={{pt: PrimeWind, unstyled: true}}>
               <App />
    </PrimeReactProvider>
)
