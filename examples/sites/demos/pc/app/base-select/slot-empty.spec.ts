import { expect, test } from '@playwright/test'

test('空数据插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('base-select#slot-empty')

  const wrap = page.locator('#slot-empty')
  const select = wrap.locator('.tiny-base-select')
  const input = select.locator('.tiny-input__inner')
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const option = dropdown.locator('.tiny-option')

  await input.click()
  await expect((await option.all()).length).toEqual(0)
  await expect(page.locator('.tiny-select-dropdown')).toHaveText('APIG 网关异常重新加载')
})
