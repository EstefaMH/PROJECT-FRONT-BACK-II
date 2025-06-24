import React, { useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom'; 
import { AuthService } from '../../services/mongo/authService';
import { pathRoutes } from '../../routes/PathRoutes';
import Layout from '../layout/Layout';


export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate(); 


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  async function handleLoginSubmit(event) {
    event.preventDefault(); 

    if (!email || !password) {
      setMessage('Por favor, ingresa tu correo y contraseña.');
      return;
    }

    setIsLoading(true);
    setMessage(''); 

    try {
      
      const response = await AuthService.login(email, password);
      console.log('Login Response:', response);

      if (response.payload.status === 200) {
        setMessage('Inicio de sesión exitoso. Redirigiendo...');
        navigate(pathRoutes.home);
      } 
      
    } catch (error) {
      console.error('Error durante el inicio de sesión:');
      setMessage(error.response.data.payload.error || "error");
    } finally {
      setIsLoading(false); 
    }
  }

  return (
    <Layout>
      <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleLoginSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="emailInput" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Correo Electrónico:
            </label>
            <input
              type="email"
              id="emailInput"
              value={email}
              onChange={handleEmailChange}
              required
              placeholder="tu@ejemplo.com"
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd', boxSizing: 'border-box' }}
              disabled={isLoading}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="passwordInput" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Contraseña:
            </label>
            <input
              type="password"
              id="passwordInput"
              value={password}
              onChange={handlePasswordChange}
              required
              placeholder="Tu contraseña"
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd', boxSizing: 'border-box' }}
              disabled={isLoading}
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#28a745', 
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              fontSize: '16px'
            }}
          >
            {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
          </button>
        </form>
        {message && ( 
          <p style={{ marginTop: '15px', padding: '10px', borderRadius: '4px', backgroundColor: message.includes('error') ? '#f8d7da' : '#d4edda', color: message.includes('error') ? '#721c24' : '#155724', border: message.includes('error') ? '1px solid #f5c6cb' : '1px solid #c3e6cb' }}>
            {message}
          </p>
        )}
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <p>¿Olvidaste tu contraseña? <Link to={pathRoutes.recovery} style={{ color: '#007bff', textDecoration: 'none' }}>Recuperar aquí</Link></p>
          <p>¿No tienes cuenta? <Link to={pathRoutes.register} style={{ color: '#007bff', textDecoration: 'none' }}>Regístrate</Link></p>
        </div>
      </div>
    </Layout>
  );
}