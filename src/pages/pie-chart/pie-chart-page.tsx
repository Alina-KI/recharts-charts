import React from 'react'
import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import { dataPieChart1, dataPieChart2 } from '../../dataAreaChart'

export const PieChartPage = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie data={dataPieChart1} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
        <Pie data={dataPieChart2} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
        <Tooltip/>
      </PieChart>
    </ResponsiveContainer>
  )
}