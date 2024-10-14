import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faUpload, faPlus, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Modal, Button, Table } from 'react-bootstrap';

function TablaUsuarios() {
  // Estados para manejar la visibilidad de los modales
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  // Funciones para abrir y cerrar los modales
  const handleShowRegisterModal = () => setShowRegisterModal(true);
  const handleCloseRegisterModal = () => setShowRegisterModal(false);

  const handleShowUpdateModal = () => setShowUpdateModal(true);
  const handleCloseUpdateModal = () => setShowUpdateModal(false);

  return (
    <div className="container-fluid">
      {/* Contenedor principal */}
      <div className="row">
        <div className="col-md-2 sidebar">
          <a href="/PaginaPrincipal">
            <img src="/logo/LOGO(DAPA).png" alt="Logo DAPA" className="img-fluid mb-4 mx-auto d-block" />
          </a>
          <a href="#" className="btn btn-light btn-lg btn-block mb-3">
            <FontAwesomeIcon icon={faMagnifyingGlass} /> Buscar
          </a>
          <a href="/PaginaPerfil" className="btn btn-light btn-lg btn-block mb-3">
            <FontAwesomeIcon icon={faUser} /> Perfil
          </a>
          <a href="#" className="btn btn-light btn-lg btn-block">
            <FontAwesomeIcon icon={faUpload} /> Crear
          </a>
          <a href="/index" className="btn btn-light btn-lg btn-block">
            <FontAwesomeIcon icon={faUpload} /> Salir
          </a>
        </div>

        {/* Sección de contenido principal */}
        <div className="col-md-10 d-flex flex-column align-items-center">
          <h1 className="my-3">DAPA — De artistas, para artistas</h1>
          <div className="table-responsive w-100">
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
