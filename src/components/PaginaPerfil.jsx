import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faUpload, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function PaginaPerfil() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleLogout = () => {
    navigate('/Pagina'); // Redirige al index "Pagina" 
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 sidebar py-3">
          <a onClick={() => navigate('/PaginaPrincipal')} className="d-block">
            <img
              src="/logo/LOGO(DAPA).png"
              alt="Logo DAPA"
              className="img-fluid mb-4 mx-auto d-block"
            />
          </a>
          <a className="btn btn-light btn-lg btn-block mb-3" onClick={() => navigate('/PaginaPerfil')}>
            <FontAwesomeIcon icon={faUser} /> Perfil
          </a>
          <a className="btn btn-light btn-lg btn-block">
            <FontAwesomeIcon icon={faUpload} /> Crear
          </a>
          <br />
          <a onClick={handleLogout} className="btn btn-light btn-lg btn-block">
            <FontAwesomeIcon icon={faRightFromBracket} /> Salir
          </a>
        </div>
        <div className="col-md-10 d-flex flex-column align-items-center">
          <div className="row my-3 d-flex align-items-center w-200">
            <div className="col-auto">
              <img
                id="profileImage"
                src="/logo/LOGO(DAPA).png"
                alt="Foto de perfil"
                className="rounded-circle img-thumbnail"
                width="150"
              />
            </div>
            <div className="col">
              <h2 id="username">Nombre del perfil</h2>
              <Button className="btn btn-dark" onClick={handleShow}>
                Editar
              </Button>
              <a href="#" className="btn btn-dark">Crear</a>
              <h4 id="name">Nombre completo</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Perfil</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label htmlFor="perfil">Nombre Perfil</label>
              <input type="text" className="form-control" id="perfil" defaultValue="Nombre del perfil" />

              <label htmlFor="completo">Nombre Usuario</label>
              <input type="text" className="form-control" id="completo" defaultValue="Nombre del usuario" />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="dark">
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default PaginaPerfil;
