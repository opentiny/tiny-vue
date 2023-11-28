import { test, expect } from '@playwright/test'

test('自定义z-index', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('modal#z-index')

  const modal = page.locator('.tiny-modal.active')
  await page.getByRole('button', { name: 'z-index的值为500' }).click()
  await expect(modal).toHaveCSS('z-index', '500')
})
