import React, { useState } from 'react';
import ButtonEditar from '../ButtonEditar';

import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css'


export default function TelaEditar() {
    const [produto, setProduto] = useState(false);
    const telaEditar = () => {
        setProduto(true);
      };

    return(
        <>
            <button
            onClick={telaEditar}
            className="btn btn-sm mb-2 btn-editar"
            data-bs-toggle="offcanvas"
            data-bs-target="#editar"
            aria-controls="offcanvasRight"
            >Editar</button>

            <ButtonEditar setProduto={setProduto} produto={produto}/>
        </>
    )
}