import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';


export default function ButtonEditar({setProduto, produto}) {
    const [editarProduto, setEditarProduto] = useState({
      id: produto.id,
      nome: produto.nome,
      quantidade: produto.quantidade,
      preco: produto.preco,
      peso: produto.peso,
      foto: produto.foto
    });


    useEffect(() => {
        async function buscar() {
          try {
            const resposta = await fetch(`http://localhost:8000/produtos/${editarProduto.id}`);
            const dados = await resposta.json();
            setEditarProduto(dados);
    
            if (!resposta.ok) {
              console.log('Erro ao buscar produto:', resposta.statusText);
            }
          } catch (error) {
            console.log('Erro ao buscar produto:', error);
          }
        }
    
        buscar();
      }, [editarProduto.id]);

      async function Editar(id) {
        try {
          const resposta = await fetch(`http://localhost:8000/produtos/${produto.id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: editarProduto.nome,
                quantidade: editarProduto.quantidade,
                descricao: editarProduto.descricao,
                foto: editarProduto.foto,
              }),
          });
    
          if (resposta.ok) {
            alert('Produto atualizado com sucesso!');
          } else {
            console.log('Erro ao atualizar produto:', resposta.statusText);
          }
        } catch (error) {
          console.log('Erro ao atualizar produto:', error);
        }
      }

    const mudarFoto = (e) => {
        const img = e.target.files[0]; // e = img, target= input, files[0]= array de arquivos selecionados caso mais de 1 
        const lerFoto = new FileReader();

        lerFoto.onload = () => {
            setEditarProduto({...editarProduto, foto: lerFoto.result});
        }

        if(img){
            lerFoto.readAsDataURL(img)
        }
    }

  return (
        <div>
            {setProduto && (
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="editar" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                <h4 className="offcanvas-title mt-4" id="offcanvasRightLabel">
                    EDITAR PRODUTO
                </h4>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                
                <div className="offcanvas-body">
                    <form>
                        <label htmlFor="nome">NOME</label>
                        <input 
                        type="text" 
                        className="form-control mb-4" 
                        value={editarProduto.nome}
                        onChange={e => setEditarProduto({...editarProduto, nome: e.target.value})}/>

                        <label htmlFor="quantidade">QUANTIDADE</label>
                        <input
                        type="text" 
                        className="form-control mb-3"
                        value={editarProduto.quantidade}
                        onChange={e => setEditarProduto({...editarProduto, quantidade: e.target.value})}/>

                        <label htmlFor="preco">PREÇO</label>
                        <input
                        type="text" 
                        className="form-control mb-3"
                        value={editarProduto.preco}
                        onChange={e => setEditarProduto({...editarProduto, preco: e.target.value})}/>

                        <label htmlFor="peso">PESO</label>
                        <input
                        type="text" 
                        className="form-control mb-4"
                        value={editarProduto.peso}
                        onChange={e => setEditarProduto({...editarProduto, peso: e.target.value})}/> {/*entender trecho*/}

                        <div className="text-center">
                            <div className="d-flex align-items-center justify-content-center mb-4">
                                <label htmlFor="foto" className="foto">
                                {editarProduto.foto && <img className="img" src={editarProduto.foto} alt=""/>} {/*entender trecho*/}
                                <input 
                                type="file" alt="" accept="image/*"
                                className="inputFoto"
                                value={editarProduto.foto}
                                onChange={mudarFoto}/> 
                                </label>
                       
                            </div>
                        </div>
                       
                        <div className="text-center"> 
                        <button className="btn btn-sm btn-editar" onClick={Editar}>ATUALIZAR</button>
                        </div>
                        
                    </form>
                </div>
            </div>
            )}
        </div>
    ); 
}


/* import React, {useState} from 'react'

export default function ButtonEditar({id, setProduto}) {
    const [editarProduto, setEditarProduto] = useState({});
 
    const Editar = (id) => {
        setEditarProduto(id);
        const produtoEditado = setProduto.find((produto) => produto.id === id);
        setEditarProduto(produtoEditado);
    };

    const salvarEdição = async () => {
        try {
            const resposta = await fetch(`'http://localhost:8000/produtos/${id}`, {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(editarProduto),
            });

            if (resposta) {
                alert('Usuário salvo com sucesso!');

                setProduto(null)
                setEditarProduto({});

            } else {
                console.log('Erro ao salvar usuário:', resposta.statusText);
            }
            } catch (error) {
                console.log('Erro ao salvar usuário:', error);
            }
    };

  /*   const Input = (event) => {
        const { name, value } = event.target;
        setEditarProduto((prevUser) => ({ ...prevUser, [name]: value }));
    }; */

