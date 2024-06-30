import { expect, test } from '@playwright/test'

test('配置式配置映射字段', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('select#map-field')
  const wrap = page.locator('#map-field')
  const select = wrap.locator('.tiny-select').nth(0)
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const option = dropdown.locator('.tiny-option')
  const suffix = select.locator('.tiny-input__suffix')
  const tag = select.locator('.tiny-tag')

  await expect(tag).toHaveCount(2)
  await expect(tag.first()).toHaveText('北京')
  await expect(tag.nth(1)).toHaveText('上海')
  await suffix.click()
  await page.waitForTimeout(500)
  await expect(dropdown).toBeVisible()
  await expect(option.filter({ hasText: '北京' })).toHaveClass(/selected/)
  await expect(option.filter({ hasText: '上海' })).toHaveClass(/selected/)
})
