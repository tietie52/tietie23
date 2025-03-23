// 获取所有左侧栏按钮和页面元素
const sidebarButtons = document.querySelectorAll('.sidebar-button');
const pages = document.querySelectorAll('.page');

// 为每个按钮添加点击事件监听器
sidebarButtons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.dataset.target;
    // 隐藏所有页面
    pages.forEach(page => page.classList.remove('active'));
    // 显示对应页面
    document.getElementById(target).classList.add('active');
  });
});