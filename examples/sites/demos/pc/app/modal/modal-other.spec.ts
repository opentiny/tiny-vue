import { test, expect } from '@playwright/test'

test('弹窗其他特性', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  const close = page.locator('.tiny-modal__close-btn >  .tiny-svg')
  await page.goto('modal#modal-other')
  await page.getByRole('button', { name: '弹窗 esc 关闭' }).first().click()
  await expect(close).toBeHidden()
  await page.locator('body').press('Escape')
  await page.getByRole('button', { name: '弹窗 esc 关闭，保留表单数据' }).click()
  await page.locator('body').press('Escape')
})
