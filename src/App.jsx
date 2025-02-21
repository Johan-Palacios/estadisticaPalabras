import Header from './components/Header.jsx'
import InputWriter from './components/InputWriter.jsx'
import ReducedStadisticList from './components/ReducedStadisticList.jsx'
import { StadisticProvider } from './context/StadisticContext.jsx'

function App () {
  return (
    <>
      <div className='bg-white pt-20'>
        <Header />
        <StadisticProvider>
          <InputWriter />
          <ReducedStadisticList />
        </StadisticProvider>
      </div>
    </>
  )
}

export default App
