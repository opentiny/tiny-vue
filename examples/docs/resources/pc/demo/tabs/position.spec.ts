import { test, expect } from '@playwright/test'

test('top显示位置', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/tabs/position')

  const tabs = page.locator('.tiny-tabs')
  const tabsList = page.locator('.tiny-tabs > div')
  const top = tabsList.first()
  const bottom = tabsList.last()

  await expect(tabs).toHaveClass(/tiny-tabs--top/)
  await expect(tabsList).toHaveCount(2)
  await expect(top).toHaveClass(/tiny-tabs__header/)
  await expect(bottom).toHaveClass('tiny-tabs__content')
})
