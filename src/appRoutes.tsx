import { Route, Routes } from 'react-router-dom'
import React from 'react'
import { AreaChartPage } from './pages/area-chart/area-chart-page'
import { AreaChartData } from './pages/area-chart/area-chart-data'
import { BarChartPage } from './pages/bar-chart/bar-chart-page'
import { MixBarChart } from './pages/bar-chart/mix-bar-chart'
import { PieChartPage } from './pages/pie-chart/pie-chart-page'
import { RadarChartPage } from './pages/radar-chart/radar-chart-page'

export const AppRoutes = () => {

  return (
    <>
    <Routes>
      <Route path="area-chart" element={<AreaChartPage/>}/>
      <Route path="area-chart-date" element={<AreaChartData/>}/>
      <Route path="bar-chart" element={<BarChartPage/>}/>
      <Route path="mix-bar-chart" element={<MixBarChart/>}/>
      <Route path="pie-chart" element={<PieChartPage/>}/>
      <Route path="radar-chart" element={<RadarChartPage/>}/>
    </Routes>
</>
)
}