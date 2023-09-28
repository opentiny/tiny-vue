import { docMenus, cmpMenus } from '@demos/webdoc/menus.js';

import { appData, $t2 } from './tools';

/**
 * 聚合doc  / cmp 两个页面的所有菜单.
 * 根据menus,生成总的menuOptions,  doc的路由指向docs/:docId,  组件的路由指向components/:cmpId
 * 1、docId 必须匹配doc_md中的文件名 ，  cmpId必须匹配 cmp_md 中的文件名
 */
const getTo = (route, key) => `${import.meta.env.VITE_CONTEXT}${route}${key}`;
const getTitle = page => `${page.name} ${$t2(page.nameCn, '')}`;

// 生成所有的菜单
function genMenus() {
  const standaloneOptions = [
    {
      key: 'overview',
      label: () => (
        <router-link to={`${import.meta.env.VITE_CONTEXT}overview`} title="组件总览">
          <span> 组件总览 </span>
        </router-link>
      ),
    },
  ];

  const docOptions = docMenus.map(menu => ({
    ...menu,
    children: menu.children.map(page => ({
      key: page.key,
      label: () => (
        <router-link to={getTo('docs/', page.key)} title={page.title}>
          <span> {page.title} </span>
        </router-link>
      ),
    })),
  }));
  const cmpOptions = cmpMenus.map(menu => ({
    ...menu,
    children: menu.children.map(page => ({
      key: page.key,
      label: () => (
        <router-link to={getTo('components/', page.key)} title={getTitle(page)}>
          <span>
            {page.name}
            {appData.lang === 'zhCN' && <span class="c-second f12 pl4"> {page.nameCn} </span>}
          </span>
        </router-link>
      ),
    })),
  }));
  return [...standaloneOptions, ...docOptions, ...cmpOptions];
}

export { genMenus };
