// PaginaPublicaciones.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faUpload, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Modal, Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import UpdateModal from '../components/Modals/UpdatePublicationModal';
import PublicationsTable from '../components/tables/PublicationsTable';

function PaginaPublicaciones() {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedPublication, setSelectedPublication] = useState(null);
  const navigate = useNavigate();

  const handleShowUpdateModal = (publication) => {
    setSelectedPublication(publication);
    setShowUpdateModal(true);
  };

  const handleCloseUpdateModal = () => setShowUpdateModal(false);
  const handleSaveChanges = () => {
    // Aquí iría la lógica para guardar los cambios
    console.log('Guardar cambios para la publicación:', selectedPublication);
    setShowUpdateModal(false);
  };

  const handleDelete = (publication) => {
    // Aquí iría la lógica para eliminar la publicación
    console.log('Eliminar publicación:', publication);
  };

  const publicationsData = [
    {
      userName: 'Usuario1',
      description: 'Descripción de la publicación',
      image: 'path/to/image1.jpg',
      stars: 4,
    },
    {
      userName: 'Usuario2',
      description: 'Otra descripción',
      image: 'path/to/image2.jpg',
      stars: 5,
    },
  ];

  return (
    <div className="container-fluid">
      {/* Contenedor principal */}
      <div className="row">
        {/* Barra de navegación superior */}
        <div className="row align-items-center bg-dark py-2">
          <div className="col-12 col-sm-2 text-center text-sm-start mb-2 mb-sm-0">
            <a href="/Pagina">
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
              <button className="btn btn-link text-light me-2" onClick={() => navigate('/PaginaPublicaciones')} style={{ textDecoration: 'none', fontSize: '16px' }}>
                Tabla Publicaciones
              </button>
              <button className="btn btn-link text-light me-2" onClick={() => navigate('/TablaUsuarios')} style={{ textDecoration: 'none', fontSize: '16px' }}>
                Tabla Usuarios
              </button>
            </div>
          </div>
        </div>

        {/* Sección de contenido principal */}
        <div className="col-12 d-flex flex-column align-items-center">
          <h1 className="my-3 text-center">DAPA — De artistas, para artistas</h1>
          <PublicationsTable
            data={publicationsData}
            onEdit={handleShowUpdateModal}
            onDelete={handleDelete}
          />
        </div>
      </div>

      {/* Modal de actualización */}
      <UpdateModal
        show={showUpdateModal}
        handleClose={handleCloseUpdateModal}
        handleSave={handleSaveChanges}
      />
    </div>
  );
}

export default PaginaPublicaciones;