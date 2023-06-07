import React, { useState } from 'react';
import Cadastrar from '../../components/Cadastrar';

import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';


export default function TelaCadastro() {
    const [produto, setProduto] = useState(false);

    const telaCadastro = () => {
        setProduto(true);
      };

    return(
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

        <Cadastrar setProduto={setProduto} produto={produto}/>
    </>
    )
}