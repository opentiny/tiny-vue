import color from '../color';
import globalToken from './globalToken';

/**
 * 获取相应的主题的globalToken
 * @param {string} themeName  主题名称
 */
export default function getGlobalToken(themeName) {
  return {
    ...globalToken,
    ...color[themeName].grayScale,
  };
}
