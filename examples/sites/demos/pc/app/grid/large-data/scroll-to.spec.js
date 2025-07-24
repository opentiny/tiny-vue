import { test, expect } from '@playwright/test'

test('滚动到指定位置', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-large-data#large-data-scroll-to')
  await page.waitForTimeout(3000)
  await page.getByRole('button', { name: '滚动到 500 列' }).click()
  await page.waitForTimeout(200)
  await expect(page.getByText('col500')).toBeVisible()
})
