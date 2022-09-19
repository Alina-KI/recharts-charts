import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { dataBarChart } from '../../dataAreaChart'

export const BarChartPage = () => {
  return (
    <ResponsiveContainer width="80%" height="50%">
      <BarChart
        width={500}
        height={300}
        data={dataBarChart}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip/>
        <Legend />
        <Bar dataKey="kv" stackId="a" fill="#41cad4" />
        <Bar dataKey="pv" stackId="a" fill="#8884d8" />
        <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  )
}