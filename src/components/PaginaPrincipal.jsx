// src/PaginaPrincipal.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css"; 

const PaginaPrincipal = () => {
    const navigate = useNavigate();

    return (
        <div className="container-fluid">
            <div className="row">
                {/* Barra lateral */}
                <div className="row align-items-center bg-dark py-2">
                    <div className="col-2">
                        <img src="logo/LOGO_DAPA_.svg" alt="Logo DAPA" style={{ height: '80px', marginLeft: '30px'}} />
                    </div>
                    <div className="col-6">
                        <div className="search-container">
                            <input type="text" className="form-control" placeholder="Search..." />
                            <button className="btn btn-light search-button">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                    <div className="col-2 text-right">
                        <div className="btn-group">
                            <button 
                                className="btn btn-light"
                                onClick={() => navigate('/paginaPerfil')}
                            >
                                <i className="fa-solid fa-user"></i> Perfil
                            </button>
                            <button className="btn btn-light">
                                <i className="fa-solid fa-upload"></i> Crear
                            </button>
                            <button 
                                className="btn btn-light"
                                onClick={() => navigate('/pagina')}
                            >
                                <i className="fa-solid fa-right-from-bracket"></i> Salir
                            </button>
                        </div>
                        <div className="btn-group mt-2">
                            <button 
                                className="btn btn-light"
                                onClick={() => navigate('/PaginaPublicaciones')}
                            >
                                <i className="fa-solid fa-right-from-bracket"></i> Ver Publicaciones
                            </button>
                            <button 
                                className="btn btn-light"
                                onClick={() => navigate('/TablaUsuarios')}
                            >
                                <i className="fa-solid fa-right-from-bracket"></i> Ver Usuarios
                            </button>
                        </div>
                    </div>
                    <div className="col-2 text-right">
                        <img src="imagenes/imagen2.jpeg" alt="Profile Icon" style={{ height: '40px', borderRadius: '50%' }} />
                    </div>
                </div>

                {/* Contenido Principal */}
                <div className="col-md-10 main-content">
                    <h1>DAPA — De artistas, para artistas</h1>
                </div>
            </div>

            {/* Scripts de Bootstrap y FontAwesome */}
            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
            <script src="https://kit.fontawesome.com/457bda309b.js" crossOrigin="anonymous"></script>
        </div>
    );
};

export default PaginaPrincipal;
