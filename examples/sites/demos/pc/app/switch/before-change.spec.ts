import { test, expect } from '@playwright/test'

test('变更前置处理', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('switch#before-change')

  const demo = page.locator('#before-change')
  const switchBtn = demo.locator('.tiny-switch')

  await switchBtn.click()
  await expect(switchBtn).not.toHaveClass(/tiny-switch-checked/)
  await page.waitForTimeout(3000)
  await expect(switchBtn).toHaveClass(/tiny-switch-checked/)
})
