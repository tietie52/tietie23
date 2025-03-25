// src/App.js
import React, { useState } from 'react';
import Sidebar from './sidebar.js';
import BlockchainPage from'./Hexinyi/BlockchainPage.tsx'
import Chengzipi from './Maowenhui/Chengzipi.tsx'; 
import TiAom from './TiAom-z/TiAom.tsx';
import Qlx from './Qinlinxiang/Qlx.tsx'
import Xiaowen from'./Zhouxiaowen/Xiaowen.tsx'
import Yyqx from './Chentingting/Yyqx.tsx';

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
                {activePage === 'Zhouxiaowen' && <Xiaowen />}
                {activePage === 'Chentingting' && <Yyqx />}
            </div>
        </div>
    );
};

export default App;