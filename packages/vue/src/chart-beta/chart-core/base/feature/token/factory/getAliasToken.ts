import { THEMES } from '../constants';
import { getIctAliasToken } from '../theme/ict/getAliasToken';
import { getCloudAliasToken } from '../theme/cloud/getAliasToken';
// import { getBpitAliasToken } from '../theme/bpit/getAliasToken';
import { getHdesignAliasToken } from '../theme/hdesign/getAliasToken';

// aliasToken的回调映射,bit先和hdesign拉齐原先那套暂不删除
const aliasTokenMap = {
  [THEMES.LIGHT]: getIctAliasToken,
  [THEMES.DARK]: globalToken => getIctAliasToken(globalToken, false),
  [THEMES.BPIT_LIGHT]: getHdesignAliasToken,
  [THEMES.BPIT_DARK]: globalToken => getHdesignAliasToken(globalToken, false),
  [THEMES.CLOUD_LIGHT]: getCloudAliasToken,
  [THEMES.CLOUD_DARK]: globalToken => getCloudAliasToken(globalToken, false),
  [THEMES.HDESIGN_LIGHT]: getHdesignAliasToken,
  [THEMES.HDESIGN_DARK]: globalToken => getHdesignAliasToken(globalToken, false),
};

/**
 *  根据globalToken获取aliasToken
 * @param {string} themeName  主题名称
 * @param {object} globalToken  globalToken
 */
function getAliasToken(themeName, globalToken) {
  return {
    ...aliasTokenMap[themeName](globalToken),
  };
}

export default getAliasToken;
export { aliasTokenMap };
