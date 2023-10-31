import { test, expect } from '@playwright/test'

test('修饰符', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('loading#body')
  const loadingText = page.locator('.tiny-loading__text')
  await expect(loadingText).toHaveText('同 v——loading 指令中的 body 修饰符')
})
