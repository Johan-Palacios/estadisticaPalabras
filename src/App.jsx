// import { useState } from 'react'
import Header from './components/Header.jsx'
import InputWriter from './components/InputWriter.jsx'
import ReducedStadisticList from './components/ReducedStadisticList.jsx'

function App () {
  return (
    <>
      <div className='bg-white py-24 sm:py-32'>
        <Header />
        <InputWriter />
        <ReducedStadisticList />
      </div>
    </>
  )
}

export default App
