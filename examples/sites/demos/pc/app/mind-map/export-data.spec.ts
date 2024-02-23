import { test, expect } from '@playwright/test'

test('导出数据', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('mind-map#export-data')
  await page.locator('button').filter({ hasText: '导出数据' }).click()
})

test('导入数据', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('mind-map#export-data')
  await page.locator('button').filter({ hasText: '导入示例数据' }).click()
})

test('清空样例数据', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('mind-map#export-data')
  await page.locator('button').filter({ hasText: '清空数据' }).click()
})
