import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";
import { Modal, Button, Form } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

const PaginaPrincipal = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [photo, setPhoto] = useState(null);
    const [description, setDescription] = useState("");
    const [photos, setPhotos] = useState([]);

    const handleModalOpen = () => setShowModal(true);
    const handleModalClose = () => setShowModal(false);
    const handlePhotoChange = (e) => setPhoto(e.target.files[0]);
    const handleDescriptionChange = (e) => setDescription(e.target.value);
    
    const handleSubmit = () => {
        const newPhoto = {
            url: URL.createObjectURL(photo),
            description,
            rating: 0,  // Inicializa la calificación en 0
            rated: false // Indica si la foto ya fue calificada
        };
        setPhotos([...photos, newPhoto]);
        handleModalClose();
        setPhoto(null);
        setDescription("");
    };

    const handleRating = (index, rating) => {
        const updatedPhotos = [...photos];
        updatedPhotos[index].rating = rating;
        updatedPhotos[index].rated = true; // Marca la foto como calificada
        setPhotos(updatedPhotos);
    };

    return (
        <div className="container-fluid">
            <div className="row">
                {/* Barra de navegación superior */}
                <div className="row align-items-center bg-dark py-2">
                    <div className="col-2">
                        <img src="logo/LOGO_DAPA_.svg" alt="Logo DAPA" style={{ height: '80px', marginLeft: '30px' }} />
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
                            <button className="btn btn-link text-light me-4" onClick={() => navigate('/Pagina')} style={{ textDecoration: 'none', fontSize: '16px' }}>
                                Exit
                            </button>
                        </div>
                        <img src="imagenes/imagen2.jpeg" alt="Profile Icon" style={{ height: '50px', borderRadius: '50%' }} />
                    </div>
                </div>

                {/* Contenido Principal */}
                <div className="col-md-10 main-content">
                    <h1>DAPA — De artistas, para artistas</h1>
                    
                    {/* Mostrar las fotos públicas */}
                    <div className="photo-gallery d-flex flex-column align-items-center" style={{ width: '50%', margin: '50px auto 50px 250px' }}>
                        {photos.map((photo, index) => (
                            <div key={index} className="mb-5" style={{ width: '80%', textAlign: 'center' }}>
                                <div className="card">
                                    <img src={photo.url} className="card-img-top" alt={`Foto ${index + 1}`} />
                                    <div className="card-body d-flex justify-content-between align-items-center">
                                        <div style={{ flex: 1, maxHeight: '100px', overflow: 'auto' }}> {/* Ajusta la altura máxima*/}
                                            <p className="card-text mb-0">{photo.description}</p>
                                        </div>
                                        {/* Mostrar estrellas para calificar y cantidad de estrellas */}
                                        <div className="d-flex align-items-center">
                                            <div className="star-rating me-2">
                                                {[...Array(5)].map((star, i) => (
                                                    <FaStar
                                                        key={i}
                                                        color={i < photo.rating ? 'gold' : 'gray'}
                                                        size={20}
                                                        onClick={() => !photo.rated && handleRating(index, i + 1)} // Permitir calificar solo si no se ha calificado
                                                        style={{ cursor: photo.rated ? 'not-allowed' : 'pointer' }} // Cambia el cursor si ya fue calificada
                                                    />
                                                ))}
                                            </div>
                                            <span>Valoración:  {photo.rating}</span> {/* Muestra la cantidad de estrellas */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Botón para abrir el modal */}
                <div className="col-12 d-flex justify-content-center my-4">
                    <button 
                        className="btn btn-dark"
                        style={{ fontSize: '18px', padding: '10px 20px', position: 'fixed', bottom: '20px', right: '20px' }}
                        onClick={handleModalOpen}
                    >
                        +
                    </button>
                </div>
            </div>    

            {/* Modal para agregar foto y descripción */}
            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Agregar Foto y Descripción</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Seleccionar Foto</Form.Label>
                            <Form.Control type="file" onChange={handlePhotoChange} />
                        </Form.Group>
                        <Form.Group controlId="formDescription">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                rows={3} 
                                placeholder="Escribe una descripción..."
                                value={description}
                                onChange={handleDescriptionChange}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Subir
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default PaginaPrincipal;
