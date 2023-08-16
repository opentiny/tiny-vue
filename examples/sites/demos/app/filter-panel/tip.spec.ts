import { test, expect } from '@playwright/test'

test('tip提示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://127.0.0.1:7130/pc/filter-panel/tip')

  const panel = page.locator('.tiny-filter-panel')
  const help = panel.locator('.tiny-svg.tiny-tooltip')
  const tooltip = page.getByRole('tooltip', { name: '请选择物品数量' })

  await help.hover()
  await expect(tooltip).toBeVisible()
})
