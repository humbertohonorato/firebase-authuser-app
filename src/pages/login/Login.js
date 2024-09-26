import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';

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
    <Container>
      <FormWrapper onSubmit={handleSubmit}>
        <InputGroup>
          <Label>Email:</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </InputGroup>
        <InputGroup>
          <Label>Password:</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </InputGroup>
        <Button type="submit">Login</Button>
        {errorMessage && <Message>{errorMessage}</Message>} {/* Mostra mensagem de erro, se houver */}
      </FormWrapper>
      <RegisterLink to="/register">Don't have an account? Register</RegisterLink>
    </Container>
  );
};

export default Login;

// Styled Components
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 20px;
`;

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    width: 400px;
    padding: 50px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    gap: 15px;
`;

const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Label = styled.label`
    font-size: 14px;
    margin-bottom: 5px;
    width: 100%;
`;

const Input = styled.input`
    padding: 10px;
    font-size: 14px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const Button = styled.button`
    padding: 10px;
    font-size: 14px;
    cursor: pointer;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
`;

const RegisterLink = styled(Link)`
    margin-top: 20px;
    font-size: 14px;
    cursor: pointer;
    background: none;
    border: none;
    color: #007bff;
    text-decoration: underline;
`;

const Message = styled.p`
    color: red;
    margin-top: 10px;
`;
