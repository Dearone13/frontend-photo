import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const Pagina = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const navigate = useNavigate();

    const handleLoginModal = () => {
        setShowLoginModal(!showLoginModal);
    };

    const handleRegisterModal = () => {
        setShowRegisterModal(!showRegisterModal);
    };

    const handleLogin = () => {
        navigate('/PaginaPrincipal');
        handleLoginModal();
    };

    const handleRegister = () => {
        navigate('/PaginaPrincipal');
        handleRegisterModal();
    };

    return (
        <div className="container-fluid">
            {/* Barra de navegación superior */}
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
                    <button className="btn btn-outline-light mx-5" onClick={handleLoginModal}>Sing in</button>
                    <button className="btn btn-outline-light" onClick={handleRegisterModal}>Sing up</button>
                </div>
                <div className="col-2 text-right">
                    <img src="imagenes/imagen2.jpeg" alt="Profile Icon" style={{ height: '40px', borderRadius: '50%' }} />
                </div>
            </div>

            {/* Contenido principal */}
            <div className="row">
                <div className="col-12 main-content">
                    <h1 style={{ color: 'black' }}>DAPA — De artistas, para artistas</h1>                  
                </div>
            </div>

            {/* Modal de inicio de sesión */}
            {showLoginModal && (
                <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Login into DAPA</h5>
                                <button type="button" className="close" onClick={handleLoginModal}>
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form id="loginForm" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                                    <div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <input type="text" className="form-control" id="username" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" className="form-control" id="password" required />
                                    </div>
                                    <button type="submit" className="btn btn-secondary btn-block">Login</button>
                                </form>
                                <div className="text-center mt-3">
                                    <p>No tienes cuenta? <a href="" onClick={handleRegisterModal}>Regístrate aquí</a>.</p>
                                    <p><a href="" onClick={handleRegisterModal}>Regístrate Gratis</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal de registro */}
            {showRegisterModal && (
                <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Regístrate gratis En DAPA</h5>
                                <button type="button" className="close" onClick={handleRegisterModal}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form id="registerForm" onSubmit={(e) => { e.preventDefault(); handleRegister(); }}>
                                    <div className="form-group">
                                        <label htmlFor="firstName">Nombre</label>
                                        <input type="text" className="form-control" id="firstName" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lastName">Apellido</label>
                                        <input type="text" className="form-control" id="lastName" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="birthday">Fecha Cumpleaños</label>
                                        <input type="date" className="form-control" id="birthday" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="username">Usuario</label>
                                        <input type="text" className="form-control" id="username" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Correo Electronico</label>
                                        <input type="email" className="form-control" id="email" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Contraseña</label>
                                        <input type="password" className="form-control" id="password" required />
                                    </div>
                                    <button type="submit" className="btn btn-secondary btn-block">Regístrate</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Pagina;
