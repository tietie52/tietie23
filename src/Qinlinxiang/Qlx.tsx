import React from'react';

const RoleList = ({ title, roles }) => (
  <div>
    <h2>{title}</h2>
    <ul>
      {roles.map((role, index) => (
        <li key={index}>
          <strong>{role.title}</strong>：{role.description}
        </li>
      ))}
    </ul>
  </div>
);

const App = () => {
  const blockchainRoles = [
    { title: '代码开源与共享', description: '区块链强调去中心化和透明性，GitHub 开源特性契合，众多项目开源代码，加速技术发展创新。' },
    { title: '协作开发与测试', description: '区块链项目需大量开发者协作，GitHub 支持多人协作，通过合并请求审查集成代码，确保稳定安全。' },
    { title: '社区建设与交流', description: 'GitHub 为开发者提供交流学习平台，可在讨论区交流想法、分享经验、解决问题。' }
  ];

  const softwareEngineeringRoles = [
    { title: '代码托管与版本控制', description: '软件工程中代码管理维护重要，GitHub 可云端存储代码，用 Git 版本控制，确保可追溯和安全。' },
    { title: '团队协作与沟通', description: '软件工程多为团队项目，GitHub 提供协作工具，方便成员沟通协作，提高开发效率。' },
    { title: '学习与借鉴', description: 'GitHub 有大量优秀开源项目，开发者可学习代码架构，了解技术趋势和最佳实践。' },
    { title: '项目管理', description: 'GitHub 提供项目管理功能，如看板、里程碑等，助团队规划管理进度，确保按时交付。' }
  ];

  return (
    <div>
      <RoleList title="在区块链领域的作用" roles={blockchainRoles} />
      <RoleList title="在软件工程领域的作用" roles={softwareEngineeringRoles} />
    </div>
  );
};

export default App;    