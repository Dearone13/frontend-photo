import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faUpload, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Modal, Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function PaginaPublicaciones() {
  // Estados para manejar la visibilidad del modal
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  // Funciones para abrir y cerrar el modal
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
                  <th scope="col" style={{ width: '15%' }}>UserName</th>
                  <th scope="col" style={{ width: '25%' }}>Description</th>
                  <th scope="col" style={{ width: '25%' }}>Image</th>
                  <th scope="col" style={{ width: '15%' }}>Stars</th>
                  <th scope="col" style={{ width: '15%' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
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
