export default CardListing
import './CardListing.css'

function CardListing() {
    return(
        <>
            <section className='CardListing'>
                <div className='Cabecalho'>
                    <form action="">
                        <label htmlFor="">Exibir</label>
                        <input className='inputExibirItens' type="text" name="" id="" />
                        <label htmlFor="">Itens</label>
                    </form>
                </div>
                <div className='TableOver'>
                    <table>
                        <tbody>
                            <tr>
                                <th>Ticket</th>
                                <th>Assunto</th>
                                <th>Status</th>
                                <th>Última interação</th>
                            </tr>
                            <tr>
                                <td>368711</td>
                                <td>Email</td>
                                <td>Aguardando sua resposta</td>
                                <td>22/01/2023 11:07</td>
                            </tr>
                            <tr>
                                <td>368711</td>
                                <td>Email</td>
                                <td>Em tratamento</td>
                                <td>22/01/2023 11:07</td>
                            </tr>
                            <tr>
                                <td>368711</td>
                                <td>Email</td>
                                <td>Resolvido</td>
                                <td>22/01/2023 11:07</td>
                            </tr>
                            <tr>
                                <td>368711</td>
                                <td>Email</td>
                                <td>Resolvido</td>
                                <td>22/01/2023 11:07</td>
                            </tr>
                            <tr>
                                <td>368711</td>
                                <td>Email</td>
                                <td>Resolvido</td>
                                <td>22/01/2023 11:07</td>
                            </tr>
                            <tr>
                                <td>368711</td>
                                <td>Email</td>
                                <td>Resolvido</td>
                                <td>22/01/2023 11:07</td>
                            </tr>
                            <tr>
                                <td>368711</td>
                                <td>Email</td>
                                <td>Resolvido</td>
                                <td>22/01/2023 11:07</td>
                            </tr>
                            <tr>
                                <td>368711</td>
                                <td>Email</td>
                                <td>Resolvido</td>
                                <td>22/01/2023 11:07</td>
                            </tr>
                            <tr>
                                <td>368711</td>
                                <td>Email</td>
                                <td>Resolvido</td>
                                <td>22/01/2023 11:07</td>
                            </tr>
                            <tr>
                                <td>368711</td>
                                <td>Email</td>
                                <td>Resolvido</td>
                                <td>22/01/2023 11:07</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}