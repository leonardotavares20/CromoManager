export default AdministrativePanel
import './AdministrativePanel.css'
import { PainelAdministrativo,
         PainelMenu,
         PainelListaMenu,
         PainelConteudo,
         PainelListaConteudo
} from './style/AdministrativePanel'

function AdministrativePanel() {
    return (
        <>
            <PainelAdministrativo>
                <div>
                    <PainelMenu>Painel</PainelMenu>
                    <PainelListaMenu>Perfil</PainelListaMenu>
                    <PainelListaMenu>Serviços</PainelListaMenu>
                    <PainelListaMenu>Suporte</PainelListaMenu>
                    <PainelListaMenu>Configurações</PainelListaMenu>
                </div>
                <div>
                    <PainelConteudo>Conteudo</PainelConteudo>
                        <ul>
                            <PainelListaConteudo>Banner</PainelListaConteudo> 
                            <PainelListaConteudo>Institucional</PainelListaConteudo>  
                            <PainelListaConteudo>Empreendimentos</PainelListaConteudo> 
                        </ul>
                </div> 
            </PainelAdministrativo>
        </>
    )
}