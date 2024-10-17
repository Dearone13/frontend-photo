import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Galeria from './Galeria'; // Asegúrate de tener el import correcto para Galeria

function PaginaPerfil() {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showPublishModal, setShowPublishModal] = useState(false);
  const [photos, setPhotos] = useState([]); // Estado para almacenar las fotos
  const navigate = useNavigate();

  const handleShowEdit = () => setShowEditModal(true);
  const handleCloseEdit = () => setShowEditModal(false);

  const handleShowPublish = () => setShowPublishModal(true);
  const handleClosePublish = () => setShowPublishModal(false);

  const handleLogout = () => {
    navigate('/Pagina'); // Redirige al index "Pagina"
  };

  const handlePublish = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    // Crear un nuevo objeto de foto
    const newPhoto = {
      url: URL.createObjectURL(formData.get('image')),
      description: formData.get('description'),
      rating: 0,  // Inicializa la calificación en 0
      rated: false // Indica si la foto ya fue calificada
    };

    // Actualizar el estado de las fotos
    setPhotos([...photos, newPhoto]);
    handleClosePublish(); // Cerrar el modal después de publicar
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Barra de navegación superior */}
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
              <button className="btn btn-link text-light me-4" onClick={() => navigate('/paginaPerfil')} style={{ textDecoration: 'none', fontSize: '16px' }}>
                Perfil
              </button>
              <button className="btn btn-link text-light me-4" onClick={() => navigate('/PaginaPublicaciones')} style={{ textDecoration: 'none', fontSize: '16px' }}>
                Tabla Publicaciones
              </button>
              <button className="btn btn-link text-light me-4" onClick={() => navigate('/TablaUsuarios')} style={{ textDecoration: 'none', fontSize: '16px' }}>
                Tabla Usuarios
              </button>
              <button className="btn btn-link text-light me-4" onClick={handleLogout} style={{ textDecoration: 'none', fontSize: '16px' }}>
                Exit
              </button>
            </div>
            <img src="imagenes/imagen2.jpeg" alt="Profile Icon" style={{ height: '50px', borderRadius: '50%' }} />
          </div>
        </div>

        <div className="col-md-10 d-flex flex-column align-items-center" style={{ marginLeft: '150px' }}>
          <div className="row my-3 d-flex align-items-center w-500">
            <div className="col-auto">
              <img
                id="profileImage"
                src="/imagenes/imagen2.jpeg"
                alt="Foto de perfil"
                className="rounded-circle img-thumbnail"
                width="150"
              />
            </div>
            <div className="col">
              <h2 id="username">Nombre del perfil</h2>
              <Button className="btn btn-dark me-3" onClick={handleShowEdit}>
                Editar
              </Button>
              <Button className="btn btn-dark me-3" onClick={handleShowPublish}>
                Publicar
              </Button>
              <h4 id="name">Nombre completo</h4>
            </div>
          </div>
          {/* Mostrar las fotos publicadas */}
          <Galeria photos={photos} />
        </div>
      </div>

      {/* Modal de edición de perfil */}
      <Modal show={showEditModal} onHide={handleCloseEdit}>
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
          <Button variant="dark" onClick={handleCloseEdit}>
            Cerrar
          </Button>
          <Button variant="dark">
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal para publicar imagen y descripción */}
      <Modal show={showPublishModal} onHide={handleClosePublish}>
        <Modal.Header closeButton>
          <Modal.Title>Publicar Contenido</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handlePublish}>
            <div className="form-group">
              <label htmlFor="image">Agregar foto</label>
              <input type="file" className="form-control" id="image" name="image" accept="image/*" required />
            </div>
            <div className="form-group">
              <label htmlFor="description">Descripción</label>
              <textarea className="form-control" id="description" name="description" rows="3" required></textarea>
            </div>
            <Button type="submit" variant="dark" className="mt-2">
              Publicar
            </Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClosePublish}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default PaginaPerfil;
