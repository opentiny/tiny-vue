import { test, expect } from '@playwright/test'

test('不显示头部及底部', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('modal#show-header-footer')

  const modal = page.locator('.tiny-modal.active')
  await page.getByRole('button', { name: '控制显示头部及底部' }).click()
  await expect(modal.locator('.tiny-modal__header')).not.toBeVisible()
})
