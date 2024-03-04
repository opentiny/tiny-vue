import color from '../color';
import getGlobalToken from './getGlobalToken';
import getAliasToken from './getAliasToken';
import getModelToken from './getModelToken';
import getChartsToken from './chartsToken';

/**
 * 获取相应的主题的token
 * @param {string} themeName  主题名称
 */
function getToken(themeName) {
  const globalToken = getGlobalToken(themeName);
  const aliasToken = getAliasToken(themeName, globalToken);
  const modelToken = getModelToken(aliasToken);
  const chartsToken = getChartsToken(aliasToken);
  return {
    ...color[themeName].colorSet,
    ...modelToken,
    ...chartsToken,
  };
}

export default getToken;
