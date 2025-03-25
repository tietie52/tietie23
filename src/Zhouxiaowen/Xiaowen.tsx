import React from'react';

const RoleList = ({ title, roles, level = 1 }) => (
  <div>
    <h2 style={{ counterReset: `section${level}` }}>{title}</h2>
    <ol style={{ listStyleType: 'none', paddingLeft: 0 }}>
      {roles.map((role, index) => (
        <li key={index} style={{ counterIncrement: `section${level}` }}>
          <span style={{ marginRight: '0.5rem' }}>{`${new Array(level).fill('').map((_, i) => ` ${i + 1}.`).join('')}${index + 1}.`}</span>
          <strong>{role.title}</strong>：{role.description}
          {role.subRoles && <RoleList title="" roles={role.subRoles} level={level + 1} />}
        </li>
      ))}
    </ol>
  </div>
);

const App = () => {
  const blockchainRoles = [
    { title: '代码开放与共享', description: '区块链技术的核心在于去中心化和透明，GitHub 的开源特质与之高度匹配。众多区块链项目在 GitHub 上开放代码，有力地推动了该技术的进步与创新。' },
    { title: '协作开发与检验', description: '区块链项目通常需要大量开发者协同完成。GitHub 支持多人在不同分支同时开展开发与测试工作，通过合并请求来审核和整合代码，保障项目稳定安全。' },
    { title: '社区构建与交流', description: 'GitHub 为区块链开发者营造了交流学习的环境。开发者可在项目讨论区交流想法、分享经验、解决问题，营造出活跃的社区氛围。' }
  ];

  const softwareEngineeringRoles = [
    { 
      title: '代码存储与版本管理', 
      description: '在软件工程中，代码的管理和维护十分关键。GitHub 允许开发者将代码存储在云端，并借助 Git 进行版本控制，便于记录代码变更历史，随时恢复到旧版本，确保代码可追溯且安全。',
      subRoles: [
        { title: '版本记录', description: '详细记录每一次代码的修改详情。' },
        { title: '版本恢复', description: '能够随时回到之前的代码版本状态。' }
      ]
    },
    { title: '团队协作与沟通', description: '软件工程大多是团队项目，GitHub 提供了丰富的协作工具，如问题跟踪、代码审查等，方便团队成员交流合作，提高开发效率。' },
    { title: '学习与借鉴', description: 'GitHub 上有大量优质的开源项目，软件工程开发者可以学习这些项目的代码和架构，了解最新技术趋势和最佳实践，提升自身技术水平。' },
    { title: '项目规划与推进', description: 'GitHub 具备项目管理功能，如项目看板、设置里程碑等，能够帮助团队更好地规划和掌控项目进度，确保项目按时交付。' }
  ];

  return (
    <div>
      <RoleList title="在区块链领域的作用" roles={blockchainRoles} />
      <RoleList title="在软件工程领域的作用" roles={softwareEngineeringRoles} />
    </div>
  );
};

export default App;    