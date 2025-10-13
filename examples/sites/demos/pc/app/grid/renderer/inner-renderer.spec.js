import { test, expect } from '@playwright/test'

test('内置渲染器', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-renderer#renderer-inner-renderer')
  await page.setViewportSize({
    width: 1400,
    height: 2500
  })
  const cell = page.getByRole('cell', { name: '90.0%' }).locator('.tiny-grid__rate-chart')
  await expect(cell).toHaveCSS('background-color', 'rgb(92, 179, 0)')
})
