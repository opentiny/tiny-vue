import { test, expect } from '@playwright/test'

test('change事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('anchor#change')

  const anchor = page.locator('.tiny-anchor')
  const link1 = anchor.getByRole('link', { name: '演示' })
  const link2 = anchor.getByRole('link', { name: 'change 事件' })
  const modal = page.locator('.tiny-modal')

  await link1.click()
  await expect(modal).toHaveCount(1)
  await link2.click()
  await expect(modal).toHaveCount(2)
  await expect(modal.last()).toHaveText(/#change/)
})
