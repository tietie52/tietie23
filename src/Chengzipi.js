// src/Chengzipi.js
import React from 'react';

const Chengzipi = () => {
  return (
    <div className="content-box">
      {/* 区块链项目部分 */}
      <section>
        <h2>GitHub在区块链项目中的作用</h2>
        <ul>
          <li>📦 代码版本控制：管理智能合约的修改历史</li>
          <li>👥 协作开发：通过Pull Request合并代码</li> {/* 修正Full→Pull */}
          <li>🔍 透明审计：所有修改记录公开可查</li>
          <li>🤖 自动化部署：使用GitHub Actions自动测试合约</li>
        </ul>
      </section>

      {/* 软件工程部分 */}
      <section>
        <h2>GitHub在软件工程中的作用</h2>
        <ol>
          <li>💾 代码仓库：安全的云端存储</li>
          <li>📝 Issue跟踪：管理任务和BUG</li>
          <li>🔧 CI/CD：自动化构建和部署</li>
          <li>📚 Wiki：项目文档管理</li>
        </ol>
      </section>
    </div>
  );
};

// 删除多余的右括号
export default Chengzipi;