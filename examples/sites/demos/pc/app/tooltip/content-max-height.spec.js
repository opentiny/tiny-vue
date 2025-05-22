import { test, expect } from '@playwright/test'

test('内容最大高度', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tooltip#content-max-height')

  const preview = page.locator('.pc-demo-container')
  const button = preview.getByRole('button', { name: '显示超长文本' })
  const tip = page.locator('.tiny-tooltip.tiny-tooltip__popper').getByText('这是很长很长的文本')

  await page.waitForTimeout(10)
  await button.hover()
  await expect(tip).toBeVisible()
  await expect(tip).toHaveCSS('max-height', '200px')
})
