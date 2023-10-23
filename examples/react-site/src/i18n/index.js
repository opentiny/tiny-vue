import { createI18n } from 'vue-i18n';

import { $local } from '../tools';
import zh from './zh.json';
import en from './en.json';
const messages = { enUS: en, zhCN: zh };
$local._lang = $local._lang !== 'zhCN' && $local._lang !== 'enUS' ? 'zhCN' : $local._lang;
const i18n = createI18n({
  locale: $local._lang, // set locale
  fallbackLocale: 'zhCN', // set fallback locale
  messages, // set locale messages
});
const $t = i18n.global.t;
const $t2 = (cn, en) => (i18n.global.locale === 'zhCN' ? cn : en);

export { i18n, $t, $t2 };
