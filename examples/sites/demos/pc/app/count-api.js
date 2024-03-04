const fs = require('fs');
const basePath = '.';

const readFile = function (path) {
  let componentCount = 0;
  let apiCount = 0;
  const readDir = fs.readdirSync(path);

  readDir.forEach(i => {
    const curDir = `${path}/${i}`;
    const stat = fs.statSync(curDir);

    if (stat.isFile() && i.endsWith('.json')) {
      componentCount += 1;
      const data = fs.readFileSync(curDir, 'utf-8');
      let dataJson = null;

      try {
        dataJson = JSON.parse(data);
      } catch (err) {
        console.log('err:', err);
      }

      if (dataJson !== null) {
        apiCount += (dataJson.attrs?.length || 0) + (dataJson.slots?.length || 0) + (dataJson.events?.length || 0) + (dataJson.methods?.length || 0);
      }
    }
  });

  console.log('componentCount:', componentCount);
  console.log('apiCount:', apiCount);
}

readFile(basePath);
