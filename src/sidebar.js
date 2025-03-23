import React from 'react';

const Sidebar = ({ onSidebarClick }) => {
    return (
        <div className="sidebar">
            <button className="sidebar-button" onClick={() => onSidebarClick('blockchain')}>
                何芯轶
            </button>
        </div>
    );
};

export default Sidebar;    