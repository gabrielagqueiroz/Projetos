
import Thead from '../../components/Thead'
import Menu from '../../components/Menu'

import 'bootstrap/dist/css/bootstrap.css';
 
export default function Produtos() {

 /*    const [usuario, setUsuario] = useState([]);


    // Porque precisa colocar dentro dessa constante lista ?
    const lista = () => {
        try {
            const resposta = fetch('http://localhost:8000/produtos');
            const dados = dados.json();
            setUsuario(dados);
        }
        catch (error) {
            console.error('ERRO AO BUSCAR USUARIO', error);
        }
    } */

    return (
        <div className="container">
        
        <Menu/>

        <table className="table table-hover mt-4">
            <Thead/>
            <tbody>
                <tr>
                {/*     {usuario.map((cada) => (
                        <th>{cada.nome}</th>
                        <th>{cada.preco}</th>
                        <th>{cada.quantidade}</th>
                        <th>{cada.peso}</th>
                    ))} */}
                </tr>
            </tbody>
        </table>

        </div>
    )
}