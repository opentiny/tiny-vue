import { expect, test } from '@playwright/test'

test('slot-empty', async ({ page }) => {
  await page.goto('select#slot-empty')

  const input = page.locator('#preview .tiny-input__inner')
  const options = page.locator('.tiny-select-dropdown').locator('.tiny-option')
  await input.click()
  await page.waitForTimeout(1000)
  await expect((await options.all()).length).toEqual(0)
  await expect(page.locator('.tiny-select-dropdown')).toHaveText('没有选项')
})
