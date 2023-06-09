import React, { useState } from 'react';
import ButtonCadastrar from '../ButtonCadastrar';

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
            className="btn btn-sm btn-cadastro"
            data-bs-toggle="offcanvas"
            data-bs-target="#cadastro"
            aria-controls="offcanvasRight"
            >CADASTRAR</button>
        </div>

        <ButtonCadastrar setProduto={setProduto} produto={produto}/>
    </>
    )
}