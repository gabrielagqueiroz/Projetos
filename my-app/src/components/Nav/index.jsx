import {Link} from 'react-router-dom';

import './styles.css'

export default function Nav() {
    return(
       <nav>
        <Link className="Nav" to="/dashboard">Dashboard</Link>
        <Link className="Nav" to="/produtos">Produtos</Link>
       </nav>

    )
}