import { test, expect } from '@playwright/test'

test('弹窗的锁定', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('modal#modal-lock')

  await page.getByRole('button', { name: '添加滚动条' }).click()
  const modal = page.locator('body')
  await page.getByRole('button', { name: '还原滚动条' }).click()
  await expect(modal).toHaveClass(/of-hidden/)

  await page.getByRole('button', { name: '仅锁定滚动条' }).first().click()
  const layout = page.locator('#doc-layout')
  await expect(layout).toHaveCSS('overflow', 'hidden auto')
  await page.getByRole('button', { name: '确定' }).click()
})
