import { expect, test } from '@playwright/test'

test('手动缓存', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('select#memoize-usage')
  const wrap = page.locator('#memoize-usage')
  const select = wrap.locator('.tiny-select')
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const option = dropdown.locator('.tiny-option')
  const cacheValue = wrap.locator('.cache-value')

  await select.click()
  await option.filter({ hasText: '黄金糕' }).click()
  await expect(cacheValue).toContainText(['选项1'])

  await select.click()
  await option.filter({ hasText: '双皮奶' }).click()
  await expect(cacheValue).toContainText(['选项2'])
})
