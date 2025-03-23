import React, { useState } from 'react';
import Sidebar from './sidebar.js';
import BlockchainPage from './BlockchainPage.js';
import Chengzipi from './Chengzipi.js';
const App = () => {
    const [activePage, setActivePage] = useState('blockchain');

    const handleSidebarClick = (page) => {
        setActivePage(page);
    };

    return (
        <div className="container">
            <Sidebar onSidebarClick={handleSidebarClick} />
            <div className="main-content">
                {activePage === 'blockchain' && <BlockchainPage />}
                {activePage === 'software-engineering' && <SoftwareEngineeringPage />}
                {activePage==='maowenhui'&&<Chengzipi/>}
            </div>
        </div>
    );
};

export default App;    