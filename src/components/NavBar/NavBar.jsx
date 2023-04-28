import './NavBar.css'
export default NavBar
import '../Buttons/Buttons.css'

function NavBar() {
    const name = 'Wallton Coelho'
    return (
        <>
            <header className='NavBar'>
                <div className='logo'>
                    <img src="./logo.svg" alt="" />
                </div>
                <div className='SaudacaoOla'>
                    <p>Olá, <strong className='name'>{name}</strong></p>
                </div>
                <div className='buttons'>
                    <button className='ButtonSucessOne'>Ir para o site</button>
                    <button className='ButtonSucessTwo'>Sair</button>
                </div>
            </header>
        </>
    )
}