import { test, expect } from '@playwright/test'

test('输入框事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  page.goto('input#events')

  const inputs = page.locator('.demo-input-events .tiny-mobile-input input')

  await inputs.first().fill('123')
  await expect(page.locator('.tiny-mobile-modal').filter({ hasText: 'input' })).toBeVisible()

  await inputs.nth(1).fill('change')
  await inputs.first().click()
  await expect(page.locator('.tiny-mobile-modal').filter({ hasText: 'change' })).toBeVisible()

  await inputs.nth(2).click()
  await expect(page.locator('.tiny-mobile-modal').filter({ hasText: 'focus' })).toBeVisible()
  await inputs.nth(3).click()
  await expect(page.locator('.tiny-mobile-modal').filter({ hasText: 'blur' })).toBeVisible()

  await page.locator('.demo-input-events .tiny-mobile-input').nth(3).locator('.tiny-mobile-input__clear').click()
  await expect(page.locator('.tiny-mobile-modal').filter({ hasText: 'clear' })).toBeVisible()
  await expect(inputs.nth(3)).toHaveValue('')
})
