import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pagina from './components/Pagina';
import PaginaPrincipal from './components/PaginaPrincipal';
import PaginaPerfil from './components/PaginaPerfil';
import PaginaPublicaciones from './components/PaginaPublicaciones';
import TablaUsuarios from './components/TablaUsuarios';

function App() { 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pagina/>} />
        <Route path="/PaginaPrincipal" element={<PaginaPrincipal />} />{/*Route de Pagina que direcciona a la PaginaPrincipal */}
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/PaginaPerfil" element={<PaginaPerfil />} /> {/*Route de Pagina Principal que direcciona a la tabla de publicaciones */}
        <Route path="/" element={<PaginaPrincipal />} /> 
        <Route path="/PaginaPublicaciones" element={<PaginaPublicaciones />} /> {/*Route que direcciona a la tabla de publicaciones */}
        <Route path="/" element={<PaginaPrincipal />} /> 
        <Route path="/TablaUsuarios" element={<TablaUsuarios/>} /> {/*Route que direcciona a la tabla de Usuarios */}
        <Route path="/" element={<PaginaPrincipal />} /> 
        <Route path="/paginaPerfil" element={<PaginaPerfil />} /> {/*Route de PaginaPerfil que direcciona a la Pagina(index) */}
        <Route path="/pagina" element={<Pagina />} />
      </Routes>
    </Router>
  );
}

export default App;
