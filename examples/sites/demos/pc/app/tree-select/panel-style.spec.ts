import { test, expect } from '@playwright/test'

test('popup-style-position', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-select#popup-style-position')

  const wrap = page.locator('#popup-style-position')
  const select = wrap.locator('.tiny-base-select')
  const dropdown = select.locator('.tiny-base-select__tags-group > .tiny-select-dropdown')

  await select.click()
  await expect(dropdown).toHaveCount(1)
  await expect(dropdown).toHaveClass(/drop/)
  await expect(dropdown).toHaveCSS('background-color', 'rgb(213, 232, 255)')
  await expect(dropdown).toHaveAttribute('x-placement', 'top')
})
