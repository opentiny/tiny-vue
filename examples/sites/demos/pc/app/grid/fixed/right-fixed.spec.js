import { test, expect } from '@playwright/test'

test('右冻结', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-fixed#fixed-right-fixed')
  await page.waitForTimeout(400)
  await expect(page.getByRole('cell', { name: '城市右冻结' })).toHaveClass(/fixed-right-first__column/)
})
