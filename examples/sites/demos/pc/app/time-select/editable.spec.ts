import { test, expect } from '@playwright/test'

test('文本框不可编辑', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-select#editable')
  const parent = page.locator('.tiny-date-editor')
  expect(await parent.locator('input').getAttribute('readonly')).toEqual('')
})
