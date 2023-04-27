export default AdministrativePanel
import './AdministrativePanel.css'

function AdministrativePanel() {
    return (
        <>
            <nav className='PainelAdministrativo'>
                <div>
                    <div className='Painel'>
                        <p>Painel</p>
                    </div>
                    <ul className='PainelUl'>
                        <li>Perfil</li>
                        <li className='active'>Serviços</li>
                        <li>Suporte</li>
                        <li>Configurações</li>
                    </ul>
                </div>
                <div>
                    <div className='Conteudo'>
                        <p>Conteudo</p>
                    </div>
                    <ul className='ConteudoUl'>
                        <li>Banner</li>
                        <li>Institucional</li>
                        <li>Empreendimentos</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}