import { test, expect } from '@playwright/test'

test('最大化显示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('modal#fullscreen')

  const modal = page.locator('.tiny-modal.type__alert')
  await page.getByRole('button', { name: '最大化显示' }).click()
  await expect(modal).toHaveClass(/is__maximize/)
  await page.locator('.tiny-modal__close-btn').click()
  await expect(modal).not.toBeVisible()
})
