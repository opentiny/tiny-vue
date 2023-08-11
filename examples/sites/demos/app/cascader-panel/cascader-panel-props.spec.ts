import { test, expect } from '@playwright/test'

test('Props 选项', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/cascader-panel/cascader-panel-props')
  await expect(page.getByText('指南组件')).toBeVisible()
  await page.getByRole('menuitem', { name: '指南' }).click()
  await expect(page.getByText('安装开发')).toBeVisible()
  await page.getByText('安装').click()
  await expect(page.getByText('项目登记环境准备安装 CLI创建项目')).toBeVisible()
})
