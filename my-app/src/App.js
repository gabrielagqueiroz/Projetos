import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Produtos from './pages/Produtos'
import Dashboard from './pages/Dashboard';
import Nav from './components/Nav';
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <div className="container">
      
      <h1>Menu Profit</h1>
      
      <Nav/>

      <hr />

      <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/produtos" element={<Produtos/>} />
       
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
