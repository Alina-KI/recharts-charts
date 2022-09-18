import React from 'react'
import s from './custom-tooltip.module.scss'

export const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className={s.customTooltip}>
        <p className={s.label}>{`${label} : ${payload[0].value}`}</p>
        <p className={s.intro}>{label}</p>
        <p className={s.desc}>Anything you want can be displayed here.</p>
      </div>
    )
  }

  return null
}