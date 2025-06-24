import { useState } from 'react'; // Importa useState
import Layout from "../../pages/layout/Layout";
import { MailService } from "../../services/mongo/mailService";

export default function RecoveryPage() {

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };


  async function handleSendEmail(event) {
    event.preventDefault();

    if (!email) {
      setMessage('Por favor, ingresa tu correo electrónico.');
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      const data = await MailService.sendRecoveryEmail({ email });

      if (data.status.toLowerCase() === 'success') {
        setMessage(data.message);
      }

    } catch (error) {

      console.error("Error al enviar el correo de recuperación:", error);
      setMessage(error.response.data.payload);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Layout>
      <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h2>Recuperar Contraseña</h2>
        <form onSubmit={handleSendEmail}> {/* Asocia el onSubmit del formulario */}
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
          <button
            type="submit"
            onClick={handleSendEmail}
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
            {isLoading ? 'Enviando...' : 'Olvide mi contraseña'}
          </button>
        </form>
        {message && (
          <p style={{ marginTop: '15px', padding: '10px', borderRadius: '4px', backgroundColor: message.includes('error') ? '#f8d7da' : '#d4edda', color: message.includes('error') ? '#721c24' : '#155724', border: message.includes('error') ? '1px solid #f5c6cb' : '1px solid #c3e6cb' }}>
            {message}
          </p>
        )}
      </div>
    </Layout>
  );
}