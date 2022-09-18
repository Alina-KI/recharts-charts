import { Route, Routes } from 'react-router-dom'
import React from 'react'
import { AreaChartPage } from './pages/area-chart/area-chart-page'

export const AppRoutes = () => {

  return (
    <>
    <Routes>
      <Route path="area-charts" element={<AreaChartPage/>}/>
    </Routes>
</>
)
}