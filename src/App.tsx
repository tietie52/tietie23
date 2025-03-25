// src/App.js
import React, { useState } from 'react';
import Sidebar from './sidebar.js';
import BlockchainPage from'./Hexinyi/BlockchainPage.tsx'
import Chengzipi from './Maowenhui/Chengzipi.tsx'; 
import TiAom from './TiAom-z/TiAom.tsx';
import Qlx from './Qinlinxiang/Qlx.tsx'

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
                {activePage === 'Qinlinxiang' && <Qlx />}
            </div>
        </div>
    );
};

export default App;