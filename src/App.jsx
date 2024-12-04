import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import ResultChart from './components/Link/ResultChart/ResultChart'
import NavBar from './components/NavBar/NavBar'
import Phones from './components/phones/Phones'
import PriceOptions from './components/PriceOptions/PriceOptions'
function App() {

  return (
    <>  
      <NavBar></NavBar>
      <PriceOptions></PriceOptions>
      <ResultChart></ResultChart>
      <Phones></Phones>
    </>
  )
}

export default App
