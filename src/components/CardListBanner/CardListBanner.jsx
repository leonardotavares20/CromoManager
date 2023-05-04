export default CardListBanner
import './style/CardListing.css'
import SwitchButton from '../SwitchButton/Switch'

function CardListBanner() {
    return(
        <>
            <section className='CardListing'>
                <div className='Cabecalho'>
                   <p>Lista de banners</p>
                </div>
                <div className='TableOver'>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Título</th>
                                <th>Categoria</th>
                                <th>Status</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Banner Topo Home</td>
                                <td>Topo - Home</td>
                                <td>Publicado</td>
                                <td>Editar<SwitchButton></SwitchButton>Excluir
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Banner Topo Home</td>
                                <td>Topo - Home</td>
                                <td>Publicado</td>
                                <td>Editar<SwitchButton></SwitchButton>Excluir
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Banner Topo Home</td>
                                <td>Topo - Home</td>
                                <td>Publicado</td>
                                <td>Editar<SwitchButton></SwitchButton>Excluir
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Banner Topo Home</td>
                                <td>Topo - Home</td>
                                <td>Publicado</td>
                                <td>Editar<SwitchButton></SwitchButton>Excluir
                                </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Banner Topo Home</td>
                                <td>Topo - Home</td>
                                <td>Publicado</td>
                                <td>Editar<SwitchButton></SwitchButton>Excluir
                                </td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Banner Topo Home</td>
                                <td>Topo - Home</td>
                                <td>Publicado</td>
                                <td>Editar<SwitchButton></SwitchButton>Excluir
                                </td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Banner Topo Home</td>
                                <td>Topo - Home</td>
                                <td>Publicado</td>
                                <td>Editar<SwitchButton></SwitchButton>Excluir
                                </td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Banner Topo Home</td>
                                <td>Topo - Home</td>
                                <td>Publicado</td>
                                <td>Editar<SwitchButton></SwitchButton>Excluir
                                </td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Banner Topo Home</td>
                                <td>Topo - Home</td>
                                <td>Publicado</td>
                                <td>Editar<SwitchButton></SwitchButton>Excluir
                                </td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Banner Topo Home</td>
                                <td>Topo - Home</td>
                                <td>Publicado</td>
                                <td>Editar<SwitchButton></SwitchButton>Excluir
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}