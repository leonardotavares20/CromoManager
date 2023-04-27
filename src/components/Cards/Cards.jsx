import './Cards.css'
export default Cards

function Cards()  {
    return (
        <>
            <div className='Card'>
                <div className='TituloAcessos'>
                    <p>Acessos</p>
                </div>
                <div className='CardRest'>
                    <div className='UltimosDias'>
                        <p>Últimos 30 dias</p>
                    </div>
                    <div>
                        <p className='NumeroAcessos'>1369</p>
                        <p className='Acessos'>Acessos</p>
                    </div>
                </div>
            </div>
        </>
    )
}