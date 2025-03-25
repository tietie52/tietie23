// src/Chengzipi.js
import React from 'react';

const TiAom= () => {
  return (
    <div className="content-box">
      {/* 区块链项目部分 */}
      <section>
        <h2>GitHub在区块链项目中的作用</h2>
        <ul>
          <li> 代码版本控制</li>
          <li>  协作开发</li> 
          <li> 透明审计</li>
          <li> 自动化部署</li>
        </ul>
      </section>

      {/* 软件工程部分 */}
      <section>
        <h2>GitHub在软件工程中的作用</h2>
        <ol>
          <li> 代码仓库：安全的云端存储,，云端存储也方便了团队成员之间的共享和协作，他们可以随时随地访问和修改代码。</li>
          <li>Issue跟踪：GitHub 的 Issue 跟踪功能允许团队成员在项目中记录问题和需求，分配任务给相应的人员，并对代码进行审查和讨论</li>
          <li> CI/CD：自动化构建和部署,提高了开发效率，还减少了人工操作带来的错误和风险。</li>
          <li> Wiki：项目文档管理,GitHub 的 Wiki 功能提供了一个方便的平台，用于创建和管理项目文档。</li>
        </ol>
      </section>
     
    </div>
  );
};

export default TiAom;