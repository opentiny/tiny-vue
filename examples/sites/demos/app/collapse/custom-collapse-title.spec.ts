import { test, expect } from '@playwright/test'

test('Collapse 自定义面板标题', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/collapse/custom-collapse-title')

  const header = page.locator('.tiny-collapse-item__header')
  await expect(header.first().locator('span')).toBeVisible()
  await expect(header.nth(1).locator('div')).not.toHaveCount(0)
})
