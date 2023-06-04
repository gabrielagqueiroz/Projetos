import Thead from '../../components/Thead'
import Tbody from '../../components/Tbody'
import Menu from '../../components/Menu'

import 'bootstrap/dist/css/bootstrap.css';

        
export default function Produtos() {
    return (
        <div className="container">
        
            <Menu/>

            <table className="table table-hover mt-4">
                <Thead/>
                <Tbody/>
            </table>

        </div>
    )
}