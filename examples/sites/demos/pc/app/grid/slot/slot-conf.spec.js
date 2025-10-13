import { test, expect } from '@playwright/test'

test('配置式表格插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-slot#slot-conf-slot')

  const dom = page.locator('#slot-conf-slot')
  const citySlot = dom.locator('.city-slot').first()
  await expect(citySlot).toHaveCSS('color', 'rgb(255, 0, 0)')
  const cityHeader = dom.locator('.city-header').first()
  await expect(cityHeader).toHaveCSS('color', 'rgb(0, 0, 255)')
})
