import React from 'react'
import s from './header.module.scss'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.blockLink}>
        <NavLink className={s.link} to='/area-chart'>Area chart</NavLink>
        <NavLink className={s.link} to='/area-chart-date'>Area chart with date</NavLink>
        <NavLink className={s.link} to='/bar-chart'>Bar chart</NavLink>
        <NavLink className={s.link} to='/mix-bar-chart'>Mix bar chart</NavLink>
        <NavLink className={s.link} to='/pie-chart'>Pie chart</NavLink>
        <NavLink className={s.link} to='/radar-chart'>Radar chart</NavLink>
      </div>
    </div>
  )
}