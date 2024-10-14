import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faUpload, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Modal, Button, Table } from 'react-bootstrap';

function PaginaPublicaciones() {
  // Estados para manejar la visibilidad del modal
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  // Funciones para abrir y cerrar el modal
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
        </div>

        {/* Sección de contenido principal */}
        <div className="col-md-10 d-flex flex-column align-items-center">
          <h1 className="my-3">DAPA — De artistas, para artistas</h1>
          <div className="table-responsive w-100">
            <Table bordered className="text-center">
              <thead>
                <tr>
                  <th scope="col" style={{ width: '15%' }}>UserName</th>
                  <th scope="col" style={{ width: '25%' }}>Description</th>
                  <th scope="col" style={{ width: '25%' }}>Image</th>
                  <th scope="col" style={{ width: '15%' }}>Stars</th>
                  <th scope="col" style={{ width: '15%' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Hola</td>
                  <td>Como</td>
                  <td>imagen</td>
                  <td>ok</td>
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

      {/* Modal de actualización */}
      <Modal show={showUpdateModal} onHide={handleCloseUpdateModal}>
        <Modal.Header closeButton>
          <Modal.Title>Actualizar Datos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id="updateForm">
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input type="text" className="form-control" id="description" name="description" required />
            </div>
            <div className="form-group">
              <label htmlFor="image">Imagen</label>
              <input type="file" className="form-control" id="image" name="image" accept="image/*" required />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleCloseUpdateModal}>
            Cerrar
          </Button>
          <Button variant="dark">
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default PaginaPublicaciones;
