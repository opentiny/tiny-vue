import { test, expect } from '@playwright/test'

test('测试是否显示箭头', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tooltip#visible-arrow')

  const button = page.getByRole('button', { name: '不显示 Tooltip 箭头' })
  const tip = page.getByRole('tooltip', { name: '不显示 Tooltip 箭头', includeHidden: true })
  const arrow = tip.locator('div.popper__arrow')

  await button.hover()
  await expect(arrow).toHaveCount(0)
})
