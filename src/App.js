// src/App.js
import React, { useState } from 'react';
import Sidebar from './sidebar.js';
import BlockchainPage from './BlockchainPage.js';
import Chengzipi from './Chengzipi.js';
import TiAom from './TiAom.js';

const App = () => {
    const [activePage, setActivePage] = useState('blockchain');

    const handleSidebarClick = (page) => {
        console.log(page);
        setActivePage(page);
    };

    return (
        <div className="container">
            <Sidebar onSidebarClick={handleSidebarClick} />
            <div className="main-content">
                {activePage === 'blockchain' && <BlockchainPage />}
                {activePage === 'maowenhui' && <Chengzipi />}
               
                {activePage === 'TiAom' && <TiAom />}
            </div>
        </div>
    );
};

export default App;