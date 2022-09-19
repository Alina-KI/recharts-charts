import { Route, Routes } from 'react-router-dom'
import React from 'react'
import { AreaChartPage } from './pages/area-chart/area-chart-page'
import { AreaChartData } from './pages/area-chart/area-chart-data'

export const AppRoutes = () => {

  return (
    <>
    <Routes>
      <Route path="area-charts" element={<AreaChartPage/>}/>
      <Route path="area-chart-date" element={<AreaChartData/>}/>
    </Routes>
</>
)
}