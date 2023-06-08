import React from 'react'

import './styles.css'

export default function ButtonExcluir({id, setProduto}) {
        const excluirProduto = async () => {
            try {
                 await fetch(`http://localhost:8000/produtos/${id}`, {
                    method: 'DELETE'
                })

                //A primeira função de callback é responsável por atualizar o estado da lista de produtos, 
                //enquanto a segunda função de callback (produtoItem) é responsável pelo filtro em si, 
                //comparando o id do produto com o id fornecido (id excluido).
                setProduto((listaProdutos) => listaProdutos.filter((produtoItem) => produtoItem.id !== id));
            } catch (error) {
                console.log(error)
            }
        }

    return(
        <>
            <button onClick={excluirProduto} className="btn btn-sm btn-excluir">Excluir</button>
        </>
    )
}