import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/global.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faUpload, faPlus, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Modal, Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function TablaUsuarios() {
  // Estados para manejar la visibilidad de los modales
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  // Funciones para abrir y cerrar los modales
  const handleShowRegisterModal = () => setShowRegisterModal(true);
  const handleCloseRegisterModal = () => setShowRegisterModal(false);
  const handleShowUpdateModal = () => setShowUpdateModal(true);
  const handleCloseUpdateModal = () => setShowUpdateModal(false);
  const navigate = useNavigate();

  return (
    <div className="container-fluid">
      {/* Contenedor principal */}
      <div className="row">
        {/* Barra de navegación superior */}
        <div className="row align-items-center bg-dark py-2">
          <div className="col-12 col-sm-2 text-center text-sm-start mb-2 mb-sm-0">
            <a href="/PaginaPrincipal">
              <img src="logo/LOGO_DAPA_.svg" alt="Logo DAPA" className="img-fluid" style={{ height: '80px' }} />
            </a>
          </div>
          <div className="col-12 col-sm-6 mb-2 mb-sm-0">
            <div className="search-container d-flex justify-content-center justify-content-sm-start">
              <input type="text" className="form-control me-2" placeholder="Search..." />
              <button className="btn btn-light search-button">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
          <div className="col-12 col-sm-4 d-flex justify-content-center justify-content-sm-end align-items-center">
            <div className="btn-group mb-2 mb-sm-0">
              <button className="btn btn-link text-light me-2" onClick={() => navigate('/paginaPerfil')} style={{ textDecoration: 'none', fontSize: '16px' }}>
                Perfil
              </button>
              <button className="btn btn-link text-light me-2" onClick={() => navigate('/PaginaPublicaciones')} style={{ textDecoration: 'none', fontSize: '16px' }}>
                Tabla Publicaciones
              </button>
              <button className="btn btn-link text-light me-2" onClick={() => navigate('/TablaUsuarios')} style={{ textDecoration: 'none', fontSize: '16px' }}>
                Tabla Usuarios
              </button>
              <button className="btn btn-link text-light me-2" onClick={() => navigate('/Pagina')} style={{ textDecoration: 'none', fontSize: '16px' }}>
                Exit
              </button>
            </div>
            <img src="imagenes/imagen2.jpeg" alt="Profile Icon" className="rounded-circle" style={{ height: '50px', width: '50px' }} />
          </div>
        </div>

        {/* Sección de contenido principal */}
        <div className="col-12 d-flex flex-column align-items-center">
          <h1 className="my-3 text-center">DAPA — De artistas, para artistas</h1>
          <div className="table-responsive w-100">
            <Table bordered className="text-center">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Name</th>
                  <th scope="col">LastName</th>
                  <th scope="col">Birthday</th>
                  <th scope="col">User</th>
                  <th scope="col">Email</th>
                  <th scope="col">Password</th>
                  <th scope="col">
                    <Button variant="dark" size="sm" onClick={handleShowRegisterModal}>
                      <FontAwesomeIcon icon={faPlus} />
                    </Button>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <Button variant="dark" size="sm" onClick={handleShowUpdateModal}>
                      <FontAwesomeIcon icon={faPenToSquare} />
                    </Button>
                    <Button variant="dark" size="sm">
                      <FontAwesomeIcon icon={faTrash} />
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>

      {/* Modal para registrar usuario */}
      <Modal show={showRegisterModal} onHide={handleCloseRegisterModal}>
        <Modal.Header closeButton>
          <Modal.Title>Registrar Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id="registerUserForm">
            <div className="form-group">
              <label htmlFor="registerUserName">Nombre</label>
              <input type="text" className="form-control" id="registerUserName" required />
            </div>
            <div className="form-group">
              <label htmlFor="registerUserLastName">Apellido</label>
              <input type="text" className="form-control" id="registerUserLastName" required />
            </div>
            <div className="form-group">
              <label htmlFor="registerUserBirthday">Fecha de Nacimiento</label>
              <input type="date" className="form-control" id="registerUserBirthday" required />
            </div>
            <div className="form-group">
              <label htmlFor="registerUseruser">User</label>
              <input type="text" className="form-control" id="registerUseruser" required />
            </div>
            <div className="form-group">
              <label htmlFor="registerUserEmail">Email</label>
              <input type="email" className="form-control" id="registerUserEmail" required />
            </div>
            <div className="form-group">
              <label htmlFor="registerUserPassword">Contraseña</label>
              <input type="password" className="form-control" id="registerUserPassword" required />
            </div>
            <Button variant="dark" type="submit">
              Registrar
            </Button>
          </form>
        </Modal.Body>
      </Modal>

      {/* Modal para actualizar usuario */}
      <Modal show={showUpdateModal} onHide={handleCloseUpdateModal}>
        <Modal.Header closeButton>
          <Modal.Title>Actualizar Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id="updateUserForm">
            <div className="form-group">
              <label htmlFor="updateUserName">Nombre</label>
              <input type="text" className="form-control" id="updateUserName" required />
            </div>
            <div className="form-group">
              <label htmlFor="updateUserLastName">Apellido</label>
              <input type="text" className="form-control" id="updateUserLastName" required />
            </div>
            <div className="form-group">
              <label htmlFor="updateUserBirthday">Fecha de Nacimiento</label>
              <input type="date" className="form-control" id="updateUserBirthday" required />
            </div>
            <div className="form-group">
              <label htmlFor="updateUseruser">User</label>
              <input type="text" className="form-control" id="updateUseruser" required />
            </div>
            <div className="form-group">
              <label htmlFor="updateUserEmail">Email</label>
              <input type="email" className="form-control" id="updateUserEmail" required />
            </div>
            <div className="form-group">
              <label htmlFor="updateUserPassword">Contraseña</label>
              <input type="password" className="form-control" id="updateUserPassword" required />
            </div>
            <Button variant="dark" type="submit">
              Editar
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default TablaUsuarios;