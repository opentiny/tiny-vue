module.exports = {
  toolkit: '@opentiny/tiny-toolkit-docs',
  tasks: {
    start: [
      // 此处配置tiny start的前置执行命令，会在套件的start命令前执行
      // { command: 'node scripts/test.js' }
    ],
    build: [
      // 此处配置tiny build的前置执行命令，会在套件的build命令前执行
      // { command: 'node scripts/test.js' }
    ],
  },
};
