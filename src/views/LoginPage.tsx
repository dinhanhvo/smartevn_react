import { useState } from 'react';
import { Card } from 'primereact/card';
import LoginForm from '../components/LoginForm';
import { login } from '../services/authService';

const LoginPage = () => {
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleLoginSubmit = (username: string, password: string) => {
        setLoading(true);
        setErrorMessage('');

        // Gọi API với callback
        login(
            username,
            password,
            (data) => {
                console.log('Login successful:', data);
                alert('Login successful!');
                setLoading(false); // Dừng loading khi thành công
            },
            (error) => {
                console.error('Login error:', error);
                setErrorMessage(error); // Hiển thị lỗi
                setLoading(false); // Dừng loading khi có lỗi
            }
        );
    };

    return (
        <div className="p-d-flex p-jc-center p-ai-center" style={{ height: '100vh' }}>
            <Card title="Login" className="p-shadow-3" style={{ width: '25rem' }}>
                <LoginForm onSubmit={handleLoginSubmit} errorMessage={errorMessage} loading={loading} />
            </Card>
        </div>
    );
};

export default LoginPage;
