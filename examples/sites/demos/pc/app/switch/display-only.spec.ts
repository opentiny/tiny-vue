import { expect, test } from '@playwright/test'

test('display-only 只显示文字，正常模式可交互', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())

  await page.goto('switch#display-only')
  await page.waitForLoadState('networkidle')

  const demo = page.locator('.switch-demo')

  const displayOnlyText = demo.getByText('是')
  await expect(displayOnlyText).toBeVisible()

  await expect(displayOnlyText).not.toHaveClass(/tiny-switch/)

  const normalSwitch = demo.locator('.tiny-switch')
  await expect(normalSwitch).toHaveCount(1)

  await expect(normalSwitch).toHaveAttribute('role', 'switch')
  await expect(normalSwitch).toHaveAttribute('aria-checked', 'true')
  await expect(normalSwitch).toHaveAttribute('aria-disabled', 'false')
  await expect(normalSwitch).toHaveAttribute('tabindex', '1')
  await expect(normalSwitch).toHaveClass(/tiny-switch-checked/)

  await normalSwitch.click()
  await expect(normalSwitch).toHaveAttribute('aria-checked', 'false')
  await expect(normalSwitch).not.toHaveClass(/tiny-switch-checked/)

  await normalSwitch.click()
  await expect(normalSwitch).toHaveAttribute('aria-checked', 'true')
  await expect(normalSwitch).toHaveClass(/tiny-switch-checked/)
})
