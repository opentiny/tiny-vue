import { test, expect } from '@playwright/test'

test('不显示头部', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('modal#showHeader')

  const modal = page.locator('.tiny-modal__box')
  await page.getByRole('button', { name: '不显示头部' }).click()
  await expect(modal.locator('.tiny-modal__header')).not.toBeVisible()
})
