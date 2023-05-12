export default CardListBanner
import SwitchButton from '../SwitchButton/Switch'
import { TableListBanner,
         Cabecalho,
         TableConfig,
         THead,
         TableHead,
         TBody,
         TableRow,
         TableData,
} from './style/CardListBanner'

function CardListBanner() {
    function Banner(ID, Titulo, Categoria, Status) {
        this.ID = ID;
        this.Titulo = Titulo;
        this.Categoria = Categoria;
        this.Status = Status;
        this.Ações = <SwitchButton></SwitchButton>;
      }

    const dados = [  
                    new Banner(1, 'Banner Topo Home', 'Topo-Home', 'Publicado'),
                    new Banner(2, 'Banner Topo Home', 'Topo-Home', 'Publicado'),
                    new Banner(3, 'Banner Topo Home', 'Topo-Home', 'Publicado'),
                    new Banner(4, 'Banner Topo Home', 'Topo-Home', 'Publicado'),
                    new Banner(5, 'Banner Topo Home', 'Topo-Home', 'Publicado'),
                    new Banner(6, 'Banner Topo Home', 'Topo-Home', 'Publicado'),
                    new Banner(7, 'Banner Topo Home', 'Topo-Home', 'Publicado'),
                    new Banner(8, 'Banner Topo Home', 'Topo-Home', 'Publicado'),
                    new Banner(9, 'Banner Topo Home', 'Topo-Home', 'Publicado'),
                    new Banner(10, 'Banner Topo Home', 'Topo-Home', 'Publicado')
                ];
    return(
        <>
        <TableListBanner>
            <Cabecalho>Lista de banners</Cabecalho>
            <TableConfig>
                <THead>
                    <TableHead >ID</TableHead>
                    <TableHead >Título</TableHead>
                    <TableHead >Categoria</TableHead>
                    <TableHead >Status</TableHead>
                    <TableHead >Ações</TableHead>
                </THead>
                <TBody>
                    {dados.map(({ID, Titulo, Categoria, Status, Ações }) => (
                        <TableRow key={ID}>
                            <TableData>{ID}</TableData>
                            <TableData>{Titulo}</TableData>
                            <TableData>{Categoria}</TableData>
                            <TableData>{Status}</TableData>
                            <TableData>{Ações}</TableData>
                        </TableRow>
                    ))} 
                </TBody>
            </TableConfig>
        </TableListBanner>
        </>
    )
}