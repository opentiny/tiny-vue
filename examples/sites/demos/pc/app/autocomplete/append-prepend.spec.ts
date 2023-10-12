import { test, expect } from '@playwright/test'

test('append-prepend', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/autocomplete/append-prepend')
  const prependText = await page.textContent('div.tiny-input-group__prepend')
  await expect(prependText).toBe('前置内容')
})
