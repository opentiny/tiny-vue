import { test, expect } from '@playwright/test'

test('下方显示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/tabs/position-bottom')

  const tabs = page.locator('.tiny-tabs')
  const tabsList = page.locator('.tiny-tabs > div')
  const top = tabsList.first()
  const bottom = tabsList.last()

  await expect(tabs).toHaveClass(/tiny-tabs--bottom/)
  await expect(tabsList).toHaveCount(2)
  await expect(top).toHaveClass('tiny-tabs__content')
  await expect(bottom).toHaveClass(/tiny-tabs__header/)
})
