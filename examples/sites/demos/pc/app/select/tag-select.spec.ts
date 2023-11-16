import { test, expect } from '@playwright/test'

test('tag-select', async ({ page }) => {
  await page.goto('select#tag-select')

  await page.mouse.move(345, 324)
  await page.waitForTimeout(1000)
  await page.mouse.down()
  await page.waitForTimeout(1000)
  await page.mouse.move(278, 324)
  await page.waitForTimeout(200)
  await page.mouse.up()
  await page.keyboard.press('Control+C')
  const valueInput = page.locator('.copy-value')
  await expect(valueInput).toHaveValue('')
  await valueInput.focus()
  await page.keyboard.press('Control+V')
  await page.waitForTimeout(200)
  await expect(valueInput).toHaveValue('黄金糕')
})
