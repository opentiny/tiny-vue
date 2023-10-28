import { expect, test } from '@playwright/test'

test('slot-footer', async ({ page }) => {
  await page.goto('select#slot-footer')

  const input = page.locator('#preview .tiny-input__inner')
  const options = page.locator('.tiny-select-dropdown').locator('.tiny-option')
  await input.click()
  await page.waitForTimeout(1000)
  await expect((await options.all()).length).toEqual(5)
  await expect(page.locator('.select-footer')).toHaveText('底部插槽')
})
