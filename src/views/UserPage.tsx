import { useEffect, useState } from 'react';
import { getAllUsers } from '../services/userService';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProgressSpinner } from 'primereact/progressspinner';

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
}

const UserPage = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        getAllUsers(
            (data) => {
                setUsers(data);
                setLoading(false);
            },
            (error) => {
                console.error('Failed to fetch users:', error);
                setError('Failed to load users. Please try again.');
                setLoading(false);
            });
    }, [])
    return (
        <div className="p-m-4">
            <h1>User Management</h1>
            {loading ? (
                <div className="p-d-flex p-jc-center p-ai-center" style={{ height: '50vh' }}>
                    <ProgressSpinner />
                </div>
            ) : error ? (
                <div className="p-error">{error}</div>
            ) : (
                <DataTable value={users} paginator rows={10} responsiveLayout="scroll">
                    <Column field="id" header="ID" />
                    <Column field="name" header="Name" />
                    <Column field="email" header="Email" />
                    <Column field="role" header="Role" />
                </DataTable>
            )}
        </div>
    );
};

export default UserPage;
