import React from 'react'
import s from './app.module.scss'
import { AppRoutes } from './appRoutes'
import { Header } from './pages/home/header'

function App() {
  return (
    <div className={s.app}>
      <Header/>
      <AppRoutes/>
    </div>
  )
}

export default App
