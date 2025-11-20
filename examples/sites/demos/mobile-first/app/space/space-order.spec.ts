import { test, expect } from '@playwright/test'

test('Space order 属性', async ({ page }) => {
  await page.goto('space#space-order')

  const buttons = page.locator('#space-order .tiny-button')

  // 检查顺序是否符合 order=['2','3','1']
  await expect(buttons.nth(0)).toHaveText('Second Button')
  await expect(buttons.nth(1)).toHaveText('Third Button')
  await expect(buttons.nth(2)).toHaveText('First Button')
  await expect(buttons.nth(3)).toHaveText('Fourth Button')
})
