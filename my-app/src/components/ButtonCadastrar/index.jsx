import React, { useState } from 'react';

import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css'


export default function ButtonCadastrar(props) {
    const [novoProduto, setNovoProduto] = useState({
        id: '',
        nome: '',
        quantidade: '',
        preco: '',
        peso:'',
        foto: ''
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
            props.setProduto([...props.produto, dados])
            setNovoProduto({id: '', nome: '', quantidade: '', preco: '', peso:'', foto:''});
        } catch (error) {
            console.log(error);
        }
    }

    const mudarFoto = (e) => {
        const img = e.target.files[0]; // e = img, target= input, files[0]= array de arquivos selecionados caso mais de 1 
        const lerFoto = new FileReader();

        lerFoto.onload = () => {
            setNovoProduto({...novoProduto, foto: lerFoto.result}); {/*entender trecho*/}
        }

        if(img){
            lerFoto.readAsDataURL(img)
        }
    }


  return (
        <div>
            {props.produto && (
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
                        <input 
                        type="text" 
                        className="form-control mb-4" 
                        value={novoProduto.nome} 
                        onChange={e => setNovoProduto({...novoProduto, nome: e.target.value})}/>

                        <label htmlFor="quantidade">QUANTIDADE</label>
                        <input 
                        type="text" 
                        className="form-control mb-3"
                        value={novoProduto.quantidade} 
                        onChange={e => setNovoProduto({...novoProduto, quantidade: e.target.value})}/>

                        <label htmlFor="preco">PREÇO</label>
                        <input 
                        type="text" 
                        className="form-control mb-3"
                        value={novoProduto.preco} 
                        onChange={e => setNovoProduto({...novoProduto, preco: e.target.value})}/>

                        <label htmlFor="peso">PESO</label>
                        <input 
                        type="text" 
                        className="form-control mb-4"
                        value={novoProduto.peso} 
                        onChange={e => setNovoProduto({...novoProduto, peso: e.target.value})}/> {/*entender trecho*/}

                        <div className="text-center">
                            <div className="d-flex align-items-center justify-content-center mb-4">
                                <label htmlFor="foto" className="foto">
                                {novoProduto.foto && <img className="img" src={novoProduto.foto} alt=""/>} {/*entender trecho*/}
                                <input 
                                type="file" id="foto" alt="" accept="image/*"
                                className="inputFoto"
                                onChange={mudarFoto}/> 
                                </label>
                       
                            </div>
                        </div>
                       
                        <div className="text-center"> 
                        <button className="btn btn-sm mt-4 btn-cadastrar" onClick={cadastro}>CADASTRAR</button>
                        </div>
                        
                    </form>
                </div>
            </div>
            )}
        </div>
    ); 
}