import { expect, test } from '@playwright/test'

test('cache-op', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('select#cache-usage')

  const wrap = page.locator('#cache-usage')
  const dropdown = page.locator('.tiny-select-dropdown')
  const input = wrap.locator('.tiny-input__inner')
  const cacheValue = wrap.locator('.cache-value')

  await input.click()
  await dropdown.getByRole('listitem').filter({ hasText: '北京' }).click()
  await expect(cacheValue).toContainText(['选项1'])

  await input.click()
  await dropdown.getByRole('listitem').filter({ hasText: '上海' }).click()
  await expect(cacheValue).toContainText(['选项2'])
})
