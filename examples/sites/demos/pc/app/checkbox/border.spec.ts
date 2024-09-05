import { test, expect } from '@playwright/test'

test('带边框复选框', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('checkbox#border')

  const demo = page.locator('#border')
  const checkbox = demo.locator('.tiny-checkbox')
  const label = demo.locator('.tiny-checkbox__label > div').first()

  await expect(checkbox).toHaveCSS('width', '158px')
  await expect(checkbox).toHaveCSS('height', '40px')
  await expect(checkbox).toHaveCSS('border-left-color', 'rgb(173, 176, 184)')
  await expect(checkbox).toHaveCSS('border-bottom-color', 'rgb(173, 176, 184)')
  await expect(label).toHaveClass(/content-overflow/)
  await label.hover()
  await expect(demo.locator('.tiny-tooltip').filter({ hasText: '备选项1 提示文字 提示文字' })).toBeVisible()
})
