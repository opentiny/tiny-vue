import { test, expect } from '@playwright/test'

test('链接地址', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('link#config-href')
  const demo = page.locator('#config-href')
  const anchor = demo.getByRole('link', { name: '默认链接' })
  await expect(anchor).toHaveAttribute('target', '_blank')
  await expect(anchor).toHaveAttribute('href', /\S+/)
})
