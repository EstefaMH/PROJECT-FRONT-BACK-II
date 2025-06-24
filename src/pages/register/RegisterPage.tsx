import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthService } from '../../services/mongo/authService';
import { pathRoutes } from '../../routes/PathRoutes';
import Layout from '../layout/Layout';


export default function RegisterPage() {
  
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    age: '', 
    password: '',
    role: 'user', 
  });
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  async function handleRegisterSubmit(event) {
    event.preventDefault();

   
    if (!formData.first_name || !formData.last_name || !formData.email || !formData.age || !formData.password) {
      setMessage('Todos los campos son obligatorios.');
      return;
    }
   
    if (parseInt(formData.age) < 1) {
      setMessage('La edad debe ser un número positivo.');
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      const response = await AuthService.register(formData); 
      console.log("res",response)
      
        setMessage(response.data|| 'Registro exitoso.');
        navigate(pathRoutes.login)
      
    } catch (error) {
      console.error('Error durante el registro:', error);
      setMessage(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Layout>
      <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h2>Registrarse</h2>
        <form onSubmit={handleRegisterSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="first_name" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Nombre:</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
              style={inputStyle}
              disabled={isLoading}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="last_name" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Apellido:</label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
              style={inputStyle}
              disabled={isLoading}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Correo Electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="tu@ejemplo.com"
              style={inputStyle}
              disabled={isLoading}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="age" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Edad:</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              style={inputStyle}
              disabled={isLoading}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Contraseña:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              style={inputStyle}
              disabled={isLoading}
            />
          </div>
          

          <button
            type="submit"
            disabled={isLoading}
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              fontSize: '16px'
            }}
          >
            {isLoading ? 'Registrando...' : 'Registrarse'}
          </button>
        </form>
        {message && (
          <p style={{ marginTop: '15px', padding: '10px', borderRadius: '4px', backgroundColor: message.includes('Error') || message.includes('obligatorios') || message.includes('contraseña') ? '#f8d7da' : '#d4edda', color: message.includes('Error') || message.includes('obligatorios') || message.includes('contraseña') ? '#721c24' : '#155724', border: message.includes('Error') || message.includes('obligatorios') || message.includes('contraseña') ? '1px solid #f5c6cb' : '1px solid #c3e6cb' }}>
            {message}
          </p>
        )}
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <p>¿Ya tienes cuenta? <a href="/login" style={{ color: '#007bff', textDecoration: 'none' }}>Inicia Sesión</a></p>
        </div>
      </div>
    </Layout>
  );
}


const inputStyle : React.CSSProperties = {
  width: '100%',
  padding: '10px',
  borderRadius: '4px',
  border: '1px solid #ddd',
  boxSizing: 'border-box'
};