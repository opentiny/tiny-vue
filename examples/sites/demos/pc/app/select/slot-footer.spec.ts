import { expect, test } from '@playwright/test'

test('底部插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('select#slot-footer')

  const wrap = page.locator('#slot-footer')
  const select = wrap.locator('.tiny-select')
  const input = select.locator('.tiny-input__inner')
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const option = dropdown.locator('.tiny-option')

  await input.click()
  await expect((await option.all()).length).toEqual(5)
  await expect(page.locator('.select-footer')).toHaveText('底部插槽')
})
