import { test, expect } from '@playwright/test'

test('单元格菜单', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-context-menu#context-menu-cell-menu')
  await page
    .getByRole('row', {
      name: '1 GFD 科技 YX 公司 华东区 2014-04-30 00:56:00 800 公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
    })
    .getByRole('cell', { name: '华东区' })
    .click({
      button: 'right'
    })
  await expect(page.locator('a').filter({ hasText: '自定义菜单项' })).toBeVisible()
})
