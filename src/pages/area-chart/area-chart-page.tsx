import React from 'react'
import { Area, AreaChart, Tooltip, XAxis, YAxis } from 'recharts'
import { dataAreaChart } from '../../dataAreaChart'
import { CustomTooltip } from '../custom-tooltip/custom-tooltip'

export const AreaChartPage = () => {

  return (
    <AreaChart
      width={900} height={550} data={dataAreaChart}
      margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
        </linearGradient>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
        </linearGradient>
      </defs>
      <XAxis dataKey="name"/>
      <YAxis/>
      {/*<CartesianGrid strokeDasharray="3 3"/>*/}
      <Tooltip content={<CustomTooltip/>}/>
      <Tooltip cursor={false}/>
      <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" activeDot={{ r: 8 }}/>
      <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)"/>
    </AreaChart>
  )
}