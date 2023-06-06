import Cadastrar from '../../components/Cadastrar'

import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';

export default function Menu() {

  return (
    <div className="row g-3 align-items-center">
        <div className="col">
            <input className="form-control mt-4 form-control-sm" placeholder="Buscar" />
        </div>
        <div className="col text-start">
            <button className="btn btn-sm mt-4 btn-buscar">BUSCAR</button>
        </div>
        <Cadastrar/>
    </div>
    ); 
}


