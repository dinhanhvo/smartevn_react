import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './views/LoginPage';
import Layout from './Layout';
import UserPage from "./views/UserPage.tsx";

function Dashboard() {
    return null;
}

function Reports() {
    return null;
}

const App = () => {
    return (
        <Router>
            <Routes>
                {/* Login Page */}
                <Route path="/login" element={<LoginPage />} />

                {/* Main Layout */}
                <Route path="/*" element={<Layout />} />
                <Route path="/" element={<Layout />}>
                    <Route path="users" element={<UserPage />} />
                </Route>

                {/* Fallback for unmatched routes */}
                <Route path="*" element={<div>Page not found</div>} />
            </Routes>
        </Router>
    );
};

export default App;
