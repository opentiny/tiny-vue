import { test, expect } from '@playwright/test'

test('滚动到指定位置', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-large-data#large-data-scroll-to')
  await page.waitForTimeout(1000)
  await page.getByRole('button', { name: '滚动到500列' }).click()
  await page.waitForTimeout(200)
  await expect(page.getByText('col508')).toBeVisible()
})
