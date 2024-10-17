import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
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
        {/*  Barra de navegación superior */}
        <div className="row align-items-center bg-dark py-2">
          <div className="col-2">
            <a href="/PaginaPrincipal">
              <img src="logo/LOGO_DAPA_.svg" alt="Logo DAPA" style={{ height: '80px', marginLeft: '30px' }} />
            </a>
          </div>
          <div className="col-6">
            <div className="search-container">
              <input type="text" className="form-control" placeholder="Search..." />
              <button className="btn btn-light search-button">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
          <div className="col-4 d-flex justify-content-end">
            <div className="btn-group" style={{ marginRight: '30px' }}>
              <button
                className="btn btn-link text-light me-4"
                onClick={() => navigate('/paginaPerfil')}
                style={{ textDecoration: 'none', fontSize: '16px' }}
              >
                Perfil
              </button>
              <button
                className="btn btn-link text-light me-4"
                onClick={() => navigate('/PaginaPublicaciones')}
                style={{ textDecoration: 'none', fontSize: '16px' }}
              >
                Tabla Publicaciones
              </button>
              <button
                className="btn btn-link text-light me-4"
                onClick={() => navigate('/TablaUsuarios')}
                style={{ textDecoration: 'none', fontSize: '16px' }}
              >
                Tabla Usuarios
              </button>
              <button
                className="btn btn-link text-light me-4"
                onClick={() => navigate('/Pagina')}
                style={{ textDecoration: 'none', fontSize: '16px' }}
              >
                Exit
              </button>
            </div>
            <img src="imagenes/imagen2.jpeg" alt="Profile Icon" style={{ height: '50px', borderRadius: '50%' }} />
          </div>
        </div>


        {/* Sección de contenido principal */}
        <div className="col-md-10 d-flex flex-column align-items-center">
          <h1 className="my-3">DAPA — De artistas, para artistas</h1>
          <div className="table-responsive w-100" style={{ marginLeft: '20%' }}>
            <Table bordered className="text-center">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Name</th>
                  <th scope="col">lastName</th>
                  <th scope="col">birthday</th>
                  <th scope="col">user</th>
                  <th scope="col">Email</th>
                  <th scope="col">password</th>
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
