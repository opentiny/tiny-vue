import { test, expect } from '@playwright/test'

test('右侧显示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tabs#position-right')

  const tabs = page.locator('.tiny-tabs')
  const tabsList = page.locator('.tiny-tabs > div')
  const top = tabsList.first()
  const bottom = tabsList.last()
  const header = tabs.locator('.tiny-tabs__header')
  const item2 = tabs.getByRole('tab').nth(1)
  const content = tabs.getByRole('tabpanel')
  const { width, height } = await header.boundingBox()

  await expect(tabs).toHaveClass(/tiny-tabs--right/)
  await expect(tabsList).toHaveCount(2)
  await expect(top).toHaveClass(/tiny-tabs__header/)
  await expect(bottom).toHaveClass('tiny-tabs__content')
  await expect(height).toBeGreaterThan(width)
  await expect(width).toBeGreaterThanOrEqual(119)
  await expect(height).toBeGreaterThanOrEqual(202)
  await item2.click()
  await expect(item2).toHaveClass(/is-active/)
  await expect(content).toHaveText(/2/)
})
