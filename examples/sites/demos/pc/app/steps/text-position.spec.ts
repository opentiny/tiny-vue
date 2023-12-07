import { test, expect } from '@playwright/test'

test('文本内容位置', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('steps#text-position')

  // TODO
})
