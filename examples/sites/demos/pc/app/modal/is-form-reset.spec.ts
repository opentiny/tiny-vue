import { test, expect } from '@playwright/test'

test('关闭弹窗，是否重置表单数据', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('modal#is-form-reset')

  const demo = page.locator('#is-form-reset')
  const modal = page.locator('.tiny-modal.active')

  await demo.getByRole('button', { name: '关闭是否重置表单' }).click()
  await modal.locator('form input[type="text"]').click()
  await modal.locator('form input[type="text"]').fill('name')
  await modal.locator('input[type="password"]').click()
  await modal.locator('input[type="password"]').fill('123')
  await modal.getByRole('button', { name: '取消' }).click()
  await demo.getByRole('button', { name: '关闭是否重置表单' }).click()
  await expect(modal.locator('form input[type="text"]')).toHaveValue('name')
  await expect(modal.locator('input[type="password"]')).toHaveValue('123')
})
