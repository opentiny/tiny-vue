import { test, expect } from '@playwright/test'

test('禁用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('hrapprover#disabled')
  await page.getByRole('button', { name: '启用/禁用' }).click()
  await expect(page.locator('.tiny-hrapprover > .is-disabled > input')).toHaveAttribute('disabled', '')
})
