import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

interface LoginFormProps {
    onSubmit: (username: string, password: string) => void;
    errorMessage: string;
    loading: boolean;
}

const LoginForm = ({ onSubmit, errorMessage, loading }: LoginFormProps) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        onSubmit(username, password);
    };

    return (
        <div className="p-fluid">
            <div className="p-field">
                <label htmlFor="username">Username</label>
                <InputText
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username"
                />
            </div>

            <div className="p-field">
                <label htmlFor="password">Password</label>
                <Password
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    feedback={false}
                />
            </div>

            {errorMessage && <small className="p-error">{errorMessage}</small>}

            <Button
                label="Login"
                icon={loading ? 'pi pi-spin pi-spinner' : 'pi pi-sign-in'}
                className="p-mt-3"
                onClick={handleLogin}
                disabled={loading}
            />
        </div>
    );
};

export default LoginForm;
