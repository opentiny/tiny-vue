import { expect, test } from '@playwright/test'

test('输入事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('numeric#input-event')
  let count

  for (let i = 0; i < 5; i++) {
    await page.locator('.tiny-numeric__input-inner').fill(String(Math.random()))

    count = await page.locator('.count').textContent()

    expect(Number(count)).toBe(i + 1)
  }
})
