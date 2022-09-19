import { Route, Routes } from 'react-router-dom'
import React from 'react'
import { AreaChartPage } from './pages/area-chart/area-chart-page'
import { AreaChartData } from './pages/area-chart/area-chart-data'
import { BarChartPage } from './pages/bar-chart/bar-chart-page'
import { MixBarChart } from './pages/bar-chart/mix-bar-chart'

export const AppRoutes = () => {

  return (
    <>
    <Routes>
      <Route path="area-chart" element={<AreaChartPage/>}/>
      <Route path="area-chart-date" element={<AreaChartData/>}/>
      <Route path="bar-chart" element={<BarChartPage/>}/>
      <Route path="mix-bar-chart" element={<MixBarChart/>}/>
    </Routes>
</>
)
}