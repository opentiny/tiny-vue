import { test, expect } from '@playwright/test'

test('距离顶部的位置', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('modal#top')

  const modal = page.locator('.tiny-modal')
  await page.getByRole('button', { name: '距离顶部的位置为500' }).click()
  await expect(modal).toHaveCSS('top', '500px')
})
