import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/global.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import RegisterUserModal from '../Modals/RegisterModal'; // Usa este modal en lugar del anterior
import UpdateUserModal from '../Modals/UpdateUserModal';
import UserService from '../../services/userService';

function TablaUsuarios() {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedUserData, setSelectedUserData] = useState(null);
  const navigate = useNavigate();

  // Fetch users on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await UserService.getUsers();
        console.log("Usuarios obtenidos:", response);
        setUsers(response);
      } catch (error) {
        console.error("Error al obtener usuarios:", error);
      }
    };
    fetchUsers();
  }, []);

  // Toggle the register modal
  const handleRegisterModal = () => {
    setShowRegisterModal(!showRegisterModal);
  };

  // Handle registering a new user
  const handleRegister = async (newUserData) => {
    try {
      const response = await UserService.registerUser(newUserData); // Llama al servicio para registrar
      setUsers((prevUsers) => [...prevUsers, response]); // Actualiza la lista de usuarios
      setShowRegisterModal(false); // Cierra el modal
    } catch (error) {
      console.error("Error al registrar usuario:", error);
    }
  };
  // Handle editing a user
  const handleEditUser = async (id) => {
    try {
      const response = await UserService.getUsers(id); // Get user data for the selected user
      setSelectedUserId(id);
      setSelectedUserData(response); // Save selected user data
      setShowUpdateModal(true);
    } catch (error) {
      console.error('Error al obtener datos del usuario:', error);
    }
  };

  // Handle user deletion
  const handleDeleteClick = async (id) => {
    console.log("ID del usuario a eliminar:", id);
    if (id) {
      try {
        await UserService.deleteUsers(id); // Call service to delete user
        setUsers((prevUsers) => prevUsers.filter(user => user.user_id !== id));
        console.log(`Usuario con ID ${id} eliminado`);
      } catch (error) {
        console.error("Error al eliminar usuario:", error);
      }
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
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
      </div>

      <div className="row">
        <div className="col-12 d-flex flex-column align-items-center">
          <h1 className="my-3 text-center">DAPA — De artistas, para artistas</h1>
          <div className="table-responsive w-100">
            <Table bordered className="text-center">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">LastName</th>
                  <th scope="col">Birthday</th>
                  <th scope="col">User</th>
                  <th scope="col">Email</th>
                  <th scope="col">
                    <Button variant="dark" size="sm" onClick={handleRegisterModal}>
                      <FontAwesomeIcon icon={faPlus} />
                    </Button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.user_id}>
                    <td>{user.user_id}</td>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.birthday}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                      <Button variant="dark" size="sm" onClick={() => handleEditUser(user.user_id)}>
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </Button>
                      <Button variant="dark" size="sm" onClick={() => handleDeleteClick(user.user_id)}>
                        <FontAwesomeIcon icon={faTrash} />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>

          {/* Register Modal */}
          <RegisterUserModal
            show={showRegisterModal}
            onClose={handleRegisterModal}
            onRegister={handleRegister} // Usar el manejador ajustado
          />

          {/* Update User Modal */}
          <UpdateUserModal
            show={showUpdateModal}
            handleClose={() => setShowUpdateModal(false)}
            userId={selectedUserId}
            userData={selectedUserData}
            updateUserData={setUsers}
          />
          
        </div>
      </div>
    </div>
  );
}

export default TablaUsuarios;