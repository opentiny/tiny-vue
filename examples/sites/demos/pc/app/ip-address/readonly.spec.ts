import { test, expect } from '@playwright/test'

test('ipAddress 文本只读', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('ip-address#readonly')

  const preview = await page.locator('#preview')
  const input1 = preview.getByRole('textbox').nth(0)
  const input2 = preview.getByRole('textbox').nth(1)
  const input3 = preview.getByRole('textbox').nth(2)
  const input4 = preview.getByRole('textbox').nth(3)

  expect(await input1.evaluate((input1) => input1.hasAttribute('readonly'))).toBe(true)
  await expect(input1).toBeEnabled()

  expect(await input2.evaluate((input2) => input2.hasAttribute('readonly'))).toBe(true)
  await expect(input2).toBeEnabled()

  expect(await input3.evaluate((input3) => input3.hasAttribute('readonly'))).toBe(true)
  await expect(input3).toBeEnabled()

  expect(await input4.evaluate((input4) => input4.hasAttribute('readonly'))).toBe(true)
  await expect(input4).toBeEnabled()
})
