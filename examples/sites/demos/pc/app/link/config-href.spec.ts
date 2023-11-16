import { test, expect } from '@playwright/test'

test('链接地址', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('link#config-href')
  const preview = page.locator('#preview')
  const anchor = preview.getByRole('link', { name: '默认链接' })
  await expect(anchor).toHaveAttribute('target', '_blank')
  await expect(anchor).toHaveAttribute('href', /\S+/)
})
