import { test, expect } from '@playwright/test'

test('高亮悬停行', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-highlight#highlight-highlight-hover-row')
  const tr = page.locator('.tiny-grid-body__row').first()
  await tr.hover()
  await page.waitForTimeout(500)
  await expect(tr).toHaveCSS('background-color', 'rgb(242, 245, 252)')
})
