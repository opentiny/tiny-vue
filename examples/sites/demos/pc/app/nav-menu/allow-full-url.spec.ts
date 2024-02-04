import { test, expect } from '@playwright/test'

test('支持完整URL', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('nav-menu#allow-full-url')
  const preview = page.locator('#allow-full-url')
  const popMenu = preview.locator('.popmenu')
  await preview.getByText('指南').first().hover()
  await expect(popMenu).toBeVisible()
  const homePage = preview.getByText('首页')
  await expect(homePage).toHaveAttribute('to', '/https://www.baidu.com/')
})
