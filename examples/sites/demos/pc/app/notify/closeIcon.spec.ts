import { test, expect } from '@playwright/test'

test('自定义关闭图标', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('notify#closeIcon')
  await page.getByRole('button', { name: '自定义关闭图标' }).click()
  const svg = page.locator('.tiny-notify__icon-close > .tiny-svg > .st0')
  await expect(svg).toHaveAttribute(
    'd',
    'M3 1h18c.9 0 2 1.1 2 2v18c0 .9-1 2-2 2H3c-.9 0-2-1.1-2-2V3c0-.9 1.1-2 2-2zm0 2v18h18V3H3zm13.8 4.2c.3.3.3.9 0 1.2L13.2 12l3.6 3.6c.3.3.3.9 0 1.2-.2.2-.4.2-.6.2-.2 0-.4-.1-.6-.2L12 13.2l-3.6 3.6c-.1.1-.4.2-.6.2s-.4-.1-.6-.2c-.3-.3-.3-.9 0-1.2l3.6-3.6-3.6-3.6c-.3-.3-.3-.9 0-1.2.3-.3.9-.3 1.2 0l3.6 3.6 3.6-3.6c.3-.3.8-.3 1.2 0z'
  )
})
