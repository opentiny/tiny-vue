import { test, expect } from '@playwright/test'

test('关闭弹窗，是否重置表单数据', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('modal#is-form-reset')

  const modal = page.locator('.tiny-modal')
  await page.getByRole('button', { name: '点击关闭按钮时触发事件' }).click()
  await page.locator('form input[type="text"]').click()
  await page.locator('form input[type="text"]').fill('name')
  await page.locator('input[type="password"]').click()
  await page.locator('input[type="password"]').fill('123')
  await page.getByRole('button', { name: '取消' }).click()
  await page.getByRole('button', { name: '点击关闭按钮时触发事件' }).click()
  await expect(page.locator('form input[type="text"]')).toHaveValue('name')
  await expect(page.locator('input[type="password"]')).toHaveValue('123')
})
