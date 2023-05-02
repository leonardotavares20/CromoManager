import './NavBar.css'
export default NavBar
import '../Buttons/Buttons.css'
import { ContainerNavBar,
         DivLogo,
         DivSaudacao,
         NomePessoa,
         ContainerBotoes
} from './style/NavBar'
import { BotaoNormal, BotaoTransparente } from '../Buttons/Buttons'

function NavBar() {
    const name = 'Wallton Coelho'
    return (
        <>
        <ContainerNavBar>
            <DivLogo>
                <img src="./logo.svg" alt="" />
            </DivLogo>
            <DivSaudacao>
                <NomePessoa>Olá<strong>Wallton Coelho</strong></NomePessoa>
            </DivSaudacao>
            <ContainerBotoes>
                <BotaoTransparente>Sair</BotaoTransparente>
                <BotaoNormal>Ir para o site</BotaoNormal>
            </ContainerBotoes>
        </ContainerNavBar>
        </>
    )
}