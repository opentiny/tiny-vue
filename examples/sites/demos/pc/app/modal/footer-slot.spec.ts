import { test, expect } from '@playwright/test'

test('底部插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('modal#footer-slot')

  const modal = page.locator('.tiny-modal')
  await page.getByRole('button', { name: '自定义脚部' }).click()
  await expect(modal.getByRole('button', { name: '自定义脚部信息' })).toBeVisible()
  await modal.getByRole('button', { name: '自定义脚部信息' }).click()
})
