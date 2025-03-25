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
     {/* 新增个人按钮 */}
     <button 
        className="sidebar-button"
        onClick={() => onSidebarClick('TiAom')}
      >钟馨娜
        
      </button> 
      {/* 新增个人按钮 */}
     <button 
        className="sidebar-button"
        onClick={() => onSidebarClick('Qinlinxiang')}
      >覃林祥
        
      </button> 
      {/* 新增个人按钮 */}
     <button 
        className="sidebar-button"
        onClick={() => onSidebarClick('Zhouxiaowen')}
      >周小雯
        
      </button> 
      {/* 新增个人按钮 */}
     <button 
        className="sidebar-button"
        onClick={() => onSidebarClick('Chentingting')}
      >陈婷婷
        
      </button> 
    </div>
  );
};

export default Sidebar;