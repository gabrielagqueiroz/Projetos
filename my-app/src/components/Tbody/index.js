import {useState, useEffect} from 'react'


import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';


export default function Tbody() {
    const [produto, setProduto] = useState([]);
    
        useEffect (() => { //o useEffect execulta uma arrow function pra verificar alterações no valor. função de retorno
            const buscarProdutos = async () => { // igual a function buscarProdutos() essa forma ja guarda a função dentro de uma variavel - requisção http 
            try {
                const resposta = await fetch('http://localhost:8000/produtos');
                const dados = await resposta.json();
                setProduto(dados);
           } catch (error){
               console.log(error);
           }
        };
    
        buscarProdutos(); // aqui ele chama a função de efeito, como os valores atualizados
    }, []);


    return (
        <tbody>
            {produto.map( cada => {
                return (
                    <tr key={cada.id}>
                        <td>{cada.nome}</td>
                        <td>{cada.quantidade}</td>
                        <td>${cada.preco * cada.quantidade},00</td>
                        <td>{cada.peso * cada.quantidade}kg</td>
                        <td>
                            <img src={cada.foto} alt="" width="70rem" />
                        </td>
                        <td>
                            <button className="btn btn-sm mt-4 btn-editar">Editar</button>
                            <button className="btn btn-sm mt-4 btn-excluir">Excluir</button>
                        </td>
                    </tr>
                )
            })}
        </tbody>
    )
}
