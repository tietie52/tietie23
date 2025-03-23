// src/sidebar.js
import React from 'react';

const Sidebar = ({ onSidebarClick }) => {
  return (
    <div className="sidebar">
      {/* 区块链按钮 */}
      <button 
        className="sidebar-button"
        onClick={() => onSidebarClick('blockchain')}
      >
        何芯轶
      </button>

      {/* 新增个人按钮 */}
      <button 
        className="sidebar-button"
        onClick={() => onSidebarClick('maowenhui')}
      >
        毛文慧
      </button>
    </div>
  );
};

export default Sidebar;