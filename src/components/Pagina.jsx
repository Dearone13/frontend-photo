import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Carrusel from './Carrusel';

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
    const images = [
        'https://media.istockphoto.com/id/636379014/es/foto/manos-la-formaci%C3%B3n-de-una-forma-de-coraz%C3%B3n-con-silueta-al-atardecer.jpg?s=612x612&w=0&k=20&c=R2BE-RgICBnTUjmxB8K9U0wTkNoCKZRi-Jjge8o_OgE=',
        'https://www.educaciontrespuntocero.com/wp-content/uploads/2020/04/mejores-bancos-de-imagenes-gratis.jpg',
        'https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75',
        'https://media.es.wired.com/photos/6501e7429fa9000811a95fe8/16:9/w_2560%2Cc_limit/Adobe%2520Firefly.jpeg'
    ];

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
                    {/* Carrusel de imágenes */}
                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h3 className="text-center">Carrusel hacia la derecha</h3>
                            <Carrusel images={images} direction="right" />
                        </div>
                        <div className="col-md-6">
                            <h3 className="text-center">Carrusel hacia la izquierda</h3>
                            <Carrusel images={images} direction="left" />
                        </div>
                    </div>
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
