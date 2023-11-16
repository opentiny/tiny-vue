import { expect, test } from '@playwright/test'

test('tag-copy-all', async ({ page }) => {
  await page.goto('select#tag-copy-all')
  const select = page.locator('#preview .tiny-select')

  await select.hover()
  await page.locator('.tiny-select__copy > .tiny-svg > .st0').click()
  const copyValueInput = page.locator('.copy-value')
  await copyValueInput.press('Control+V')
  await expect(copyValueInput).toHaveValue('黄金糕')
})
