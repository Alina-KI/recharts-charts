import React from 'react'
import s from './header.module.scss'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.blockLink}>
        <NavLink className={s.link} to='/area-charts'>Area charts</NavLink>
        <NavLink className={s.link} to='/area-charts'>Area charts</NavLink>
        <NavLink className={s.link} to='/area-charts'>Area charts</NavLink>
        <NavLink className={s.link} to='/area-charts'>Area charts</NavLink>
      </div>
    </div>
  )
}