import React from'react';

const App = () => {
  return (
    <div>
      <h1>GitHub的作用</h1>
      <p>GitHub是一个基于Git的代码托管平台，具有多方面重要作用：</p>
      <ul>
        <li>
          <strong>代码托管与版本控制</strong>：开发者可将代码存储于GitHub，利用Git追踪每一次代码更改，方便回滚到历史版本，保证代码的安全性和可追溯性。
        </li>
        <li>
          <strong>协作开发</strong>：支持多人协作，团队成员可自由创建分支、合并代码、进行评论和讨论。通过issues记录和跟踪问题，pull request请求代码合并，提高协作效率。
        </li>
        <li>
          <strong>社交与学习</strong>：作为开发者社交网络，可关注其他开发者和项目，获取动态。同时，大量开源项目是宝贵学习资源，有助于了解技术趋势和实践。
        </li>
        <li>
          <strong>项目管理</strong>：能创建项目管理面板，记录任务、分配成员、跟踪进度，还可进行代码审查，保证代码质量和规范。
        </li>
      </ul>
    </div>
  );
};

export default App;