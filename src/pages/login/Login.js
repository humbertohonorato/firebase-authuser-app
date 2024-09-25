import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = ({ onUserLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onUserLogin(email, password);
      navigate('/home');
    } catch (error) {
      setErrorMessage('Login failed. Please check your email and password.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        {errorMessage && <p>{errorMessage}</p>} {/* Mostra mensagem de erro, se houver */}
      </form>
      <p>
        Não tem uma conta? <Link to="/register">Registre-se aqui</Link>
      </p> {/* Link para a página de registro */}
    </div>
  );
};

export default Login;
