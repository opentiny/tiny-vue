import { test, expect } from '@playwright/test'

test('服务端数据保存和删除方法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-toolbar#toolbar-save-data')
  await page.getByText('GFD 科技 YX 公司').first().click()
  await page.locator('.tiny-grid-default-input').fill('dsfds')
  await page.getByRole('row', { name: '名称 区域 地址 公司简介' }).getByText('名称').click()
  await page.getByRole('button', { name: '保存' }).click()
  await expect(page.getByText('dsfds').first()).toBeVisible()
})
