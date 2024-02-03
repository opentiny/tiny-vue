import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('cascader-panel#basic-usage')
  await page.getByRole('menuitem', { name: '指南' }).click()
  await page.getByRole('menuitem', { name: '安装', exact: true }).click()
  await page.getByRole('menuitem', { name: '项目登记' }).click()

  await expect(page.getByRole('menuitem', { name: '项目登记' })).toHaveClass('tiny-cascader-node is-active')
  await expect(page.getByRole('menuitem', { name: '项目登记' })).toHaveCSS('background-color', 'rgb(94, 124, 224)')
})
