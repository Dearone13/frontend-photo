import React, { useReducer } from 'react';
import User from '../../services/userService';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Estado inicial
const initialState = {
    first_name: '',
    last_name: '',
    birthday: '',
    username: '',
    email: '',
    password: '',
    description: 'Esta es una foto divertida',
};

const reducer = (state, action) => {
   //Chnager of state if present data
    switch (action.type) {
        case 'SET_FIELD':
            return { ...state, [action.field]: action.value };
        case 'RESET':
            return initialState;
        default:
            return state;
    }
};

const RegisterModal = ({ show, onClose }) => {
   //useReducer for change in modalRegister ()
    const [state, dispatch] = useReducer(reducer, initialState);
    const navigate = useNavigate(); // Inicializa useNavigate

    const handleChange = (e) => {
        dispatch({
            type: 'SET_FIELD',
            field: e.target.id,
            value: e.target.value,
        });
    };

    //mehtod for when somehting update from model
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Construir el objeto de datos a enviar 
        const data = {
            username: state.username,
            first_name: state.first_name,
            last_name: state.last_name,
            birthday: state.birthday,
            email: state.email,
            password: state.password,
            description: "Esta es una foto divertida" // O cualquier valor que desees
        };

        //past to JSON
        const jsonData = JSON.stringify(data);
        console.log('Datos a enviar:', jsonData);

        try {
            //Send to userServiuce
            const response = await User.registerUsers(jsonData);
            //Print response(we have to comment this /the user can watch de password)
            console.log('Usuario registrado', response);
            dispatch({ type: 'RESET' }); // Resetea el formulario después de registrarse
            window.location.reload();
        } catch (error) {
            console.error('Error al registrar usuario', error); //In case of error
        }
    };

    return (
        <>
            {show && (
                <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
                    <div className="modal-dialog modal-dialog-centered modal-lg" style={{ maxWidth: '400px' }} role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Regístrate gratis en DAPA</h5>
                                <button type="button" className="close" onClick={onClose}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form id="registerForm" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="firstName">Nombre</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="first_name"
                                            value={state.first_name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lastName">Apellido</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="last_name"
                                            value={state.last_name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="birthday">Fecha de Cumpleaños</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="birthday"
                                            value={state.birthday}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="username">Usuario</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="username"
                                            value={state.username}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Correo Electrónico</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            value={state.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Contraseña</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            value={state.password}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-secondary btn-block">Regístrate</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default RegisterModal;
