import { test, expect } from '@playwright/test'

test('Collapse 禁用状态', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('collapse#disable')

  const disabledItem = page.locator('.tiny-collapse-item').nth(2)
  const disabledHeader = page.locator('.tiny-collapse-item__header').nth(2)
  const disabledContent = page.locator('.tiny-collapse-item__wrap').nth(2)

  await expect(disabledItem).toHaveClass(/is-disabled/)
  await expect(disabledContent).toHaveCSS('display', 'none')
  await disabledHeader.click()
  await expect(disabledContent).toHaveCSS('display', 'none')
})
