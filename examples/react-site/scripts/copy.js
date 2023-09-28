const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');

const baseDir = process.cwd();
const toRemovefiles = [path.resolve(baseDir, './public/@demos')];

toRemovefiles.forEach(file => {
  if (fs.pathExistsSync(file)) {
    fs.removeSync(file);
  }
});

const copyfiles = [
  {
    // 组件示例源码、组件描述markdown和组件示例配置
    source: 'demos',
    target: './public/@demos',
  },
];

// 根据传入的参数，同步拷贝相应的文件
copyfiles.forEach(path => {
  try {
    fs.copySync(path.source, path.target, (src) => {
      return !/.jsx$/.test(src);
    });
    console.log(chalk.green(path.source + ' 拷贝完成！'));
  } catch (err) {
    console.log(chalk.red(err));
  }
});
