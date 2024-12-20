import { Outlet } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import { PanelMenu } from 'primereact/panelmenu';

const Layout = () => {
    const sidebarItems = [
        { label: 'Dashboard', icon: 'pi pi-home', command: () => console.log('Dashboard') },
        { label: 'Reports', icon: 'pi pi-chart-line' },
        { label: 'Settings', icon: 'pi pi-cog' },
    ];

    return (
        <div className="layout">
            <header className="layout-header">
                <Menubar model={[{ label: 'Logout', icon: 'pi pi-sign-out' }]} />
            </header>
            <div className="layout-content">
                <aside className="layout-sidebar">
                    <PanelMenu model={sidebarItems} />
                </aside>
                <main className="layout-main">
                    <Outlet /> {/* Hiển thị các trang con */}
                </main>
            </div>
        </div>
    );
};

export default Layout;
