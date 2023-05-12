import AdministrativePanel from './components/AdministrativePanel/AdministrativePanel'
import NavBar from '../src/components/NavBar/NavBar'
import CardListBanner from './components/CardListBanner/CardListBanner'
import { GlobalStyled } from './components/GlobalStyle/GlobalStyle'

function App() {
  return (
    <>
    <GlobalStyled></GlobalStyled>
    <NavBar></NavBar>
    <AdministrativePanel></AdministrativePanel>
    <CardListBanner></CardListBanner>
    </>
  )
}

export default App
