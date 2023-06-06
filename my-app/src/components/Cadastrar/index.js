import { useState } from 'react';

import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';

export default function Cadastrar() {
    const [produto, setProduto] = useState(false);
    const [novoProduto, setNovoProduto] = useState({
        id: '',
        nome: '',
        qtd: '',
        preco: '',
        peso:''
    });


    const cadastro = async () => {
        try {
            const resposta = await fetch('http://localhost:8000/produtos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(novoProduto)
            });
            const dados = await resposta.json();
            console.log(dados)
            setNovoProduto(dados);
            setProduto(false);
        } catch (error) {
            console.log(error);
        }
    }


  const telaCadastro = () => {
    setProduto(true);
  };

  return (
    <>
        <div className="col text-end">
            <button
            onClick={telaCadastro}
            className="btn btn-sm mt-4 btn-cadastro"
            data-bs-toggle="offcanvas"
            data-bs-target="#cadastro"
            aria-controls="offcanvasRight"
            >CADASTRAR</button>
        </div>

        <div>
            {produto && (
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="cadastro" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                <h4 className="offcanvas-title mt-4" id="offcanvasRightLabel">
                    CADASTRAR
                </h4>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                
                <div className="offcanvas-body">
                    <form>
                        <label htmlFor="nome">NOME</label>
                        <input type="text" className="form-control mb-4"/>

                        <label htmlFor="qtd">QUANTIDADE</label>
                        <input type="text" className="form-control mb-3"/>

                        <label htmlFor="preco">PREÇO</label>
                        <input type="text" className="form-control mb-3"/>

                        <label htmlFor="peso">PESO</label>
                        <input type="text" className="form-control mb-3"/>

                        <div className="text-center">
                        <button className="btn btn-sm mt-4 btn-cadastrar" onClick={cadastro}>CADASTRAR</button>
                        </div>
                        
                    </form>
                </div>
            </div>
            )}
        </div>
    </>
    ); 
}