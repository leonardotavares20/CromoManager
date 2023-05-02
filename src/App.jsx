import { BotaoNormal } from './components/Buttons/Buttons'
import AdministrativePanel from './components/AdministrativePanel/AdministrativePanel'
import Cards from "./components/Cards/Cards"
import Forms from "./components/Forms/Forms"
import CardListing from "./components/CardListing/CardListing"
import NavBar from '../src/components/NavBar/NavBar'
import CardOpenCall from './components/CardOpenCall/CardOpenCall'

function App() {
  return (
    <>
    <NavBar></NavBar>
    <AdministrativePanel></AdministrativePanel>
    <Cards></Cards>
    <Forms></Forms>
    <CardListing></CardListing>
    <CardOpenCall></CardOpenCall>
    </>
  )
}

export default App
