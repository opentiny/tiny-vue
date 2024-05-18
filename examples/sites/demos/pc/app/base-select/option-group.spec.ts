import { test, expect } from '@playwright/test'

test('option-group', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('base-select#option-group')

  const wrap = page.locator('#option-group')
  const select = wrap.locator('.tiny-base-select').nth(0)
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const option = dropdown.locator('.tiny-option')
  const title = dropdown.locator('.tiny-option-group__title')
  const group = dropdown.locator('.tiny-option-group ')

  await select.click()
  await expect(title.nth(0)).toHaveText('热门城市')
  await expect(title.nth(1)).toHaveText('城市名')
  await expect(option.filter({ hasText: '上海' })).toHaveClass(/is-disabled/)
  await expect(option.filter({ hasText: '北京' })).toHaveClass(/is-disabled/)
  await expect(group.nth(0).locator('.tiny-option')).toHaveCount(2)
  await expect(group.nth(1).locator('.tiny-option')).toHaveCount(8)
  await expect((await group.all()).length).toEqual(2)
})
