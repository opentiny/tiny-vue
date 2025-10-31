import { test, expect } from '@playwright/test'

test('help 提示场景', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('search-box#help')

  const btn = page.locator('.tvp-search-box__input-help')

  page.on('console', (msg) => {
    if (msg.type() === 'log') {
      expect(msg.text()).toEqual('Help Event')
    }
  })

  await btn.click()
})
