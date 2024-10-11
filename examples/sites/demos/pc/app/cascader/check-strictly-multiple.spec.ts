import { test, expect } from '@playwright/test'

test('多选选择任意一级选项', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('cascader#check-strictly-multiple')
  await page.getByText('指南 /安装指南 /开发 /引入组件').click()
  await page.getByRole('menuitem', { name: '开发' }).locator('span').nth(1).click()
  await page.getByRole('menuitem', { name: '安装' }).click()
})
