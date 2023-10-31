import { expect, test } from '@playwright/test'

test('memoize-usage', async ({ page }) => {
  await page.goto('select#memoize-usage')
  const input = page.locator('#preview .tiny-input__inner')
  const cacheValue = page.locator('#preview .cache-value')

  await input.click()
  await page.getByRole('listitem').filter({ hasText: '黄金糕' }).click()
  await expect(cacheValue).toContainText(['选项1'])
  await input.click()
  await page.getByRole('listitem').filter({ hasText: '双皮奶' }).click()
  await expect(cacheValue).toContainText(['选项2'])
})
