export default AdministrativePanel
// import './AdministrativePanel.css'
import { PainelAdministrativo,
         PainelMenu,
         PainelListaMenu,
         PainelConteudo,
         PainelListaConteudo,
         SpanSeta
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
                            <PainelListaConteudo>Banner<SpanSeta >arrow_forward_ios</SpanSeta></PainelListaConteudo> 
                            <PainelListaConteudo>Institucional<SpanSeta >arrow_forward_ios</SpanSeta></PainelListaConteudo>  
                            <PainelListaConteudo>Empreendimentos<SpanSeta >arrow_forward_ios</SpanSeta></PainelListaConteudo> 
                        </ul>
                </div> 
            </PainelAdministrativo>
        </>
    )
}