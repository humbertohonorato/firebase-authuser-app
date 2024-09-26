import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Register = ({ onUserRegister }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const resultMessage = await onUserRegister(email, password, name, surname, birthDate);

        if (resultMessage.includes("success")) {
            setMessageType('success');
            setMessage(resultMessage);
        } else {
            setMessageType('error');
            setMessage(resultMessage);
        }
    };

    const handleLoginRedirect = () => {
        navigate('/login');
    };

    return (
        <Container>
            <FormWrapper onSubmit={handleSubmit}>
                <InputRow>
                    <InputGroup>
                        <Label>Name:</Label>
                        <Input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </InputGroup>
                    <InputGroup>
                        <Label>Surname:</Label>
                        <Input
                            type="text"
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                            required
                        />
                    </InputGroup>
                </InputRow>
                <InputGroup>
                    <Label>Birth Date:</Label>
                    <Input
                        type="date"
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                        required
                    />
                </InputGroup>
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
                <Button type="submit">Register</Button>
                {message && <Message type={messageType}>{message}</Message>} {/* Passa o tipo de mensagem */}
            </FormWrapper>
            <LoginButton onClick={handleLoginRedirect}>Already have an account? Login</LoginButton>
        </Container>
    );
};

export default Register;

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

const InputRow = styled.div`
    display: flex;
    gap: 30px;
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

const LoginButton = styled.button`
    margin-top: 20px;
    font-size: 14px;
    cursor: pointer;
    background: none;
    border: none;
    color: #007bff;
    text-decoration: underline;
`;

const Message = styled.p`
    color: ${({ type }) => (type === 'error' ? 'red' : 'green')}; /* Cor baseada no tipo de mensagem */
    margin-top: 10px;
`;
