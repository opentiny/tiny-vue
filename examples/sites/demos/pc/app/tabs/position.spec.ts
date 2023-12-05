import { test, expect } from '@playwright/test'

test('位置：四种显示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tabs#position')

  const tabs = page.locator('.tiny-tabs')
  const tabsList = page.locator('.tiny-tabs > div')
  const top = tabsList.first()
  const bottom = tabsList.last()

  // left 显示
  const header = tabs.locator('.tiny-tabs__header')
  const item2 = tabs.getByRole('tab', { name: 'Navigation 2' })
  const content = tabs.getByRole('tabpanel')
  const { width, height } = await header.boundingBox()

  await expect(tabs).toHaveClass(/tiny-tabs--left/)
  await expect(tabsList).toHaveCount(2)
  await expect(top).toHaveClass(/tiny-tabs__header/)
  await expect(bottom).toHaveClass('tiny-tabs__content')
  await expect(height).toBeGreaterThan(width)
  await expect(width).toBeGreaterThanOrEqual(119)
  await expect(height).toBeGreaterThanOrEqual(202)
  await item2.click()
  await expect(item2).toHaveClass(/is-active/)
  await expect(content).toHaveText(/2/)

  // top显示
  await page.getByRole('radio', { name: 'top 显示' }).filter({ hasText: 'top 显示' }).click()
  await expect(tabs).toHaveClass(/tiny-tabs--top/)
  await expect(tabsList).toHaveCount(2)
  await expect(top).toHaveClass(/tiny-tabs__header/)
  await expect(bottom).toHaveClass('tiny-tabs__content')

  // bottom显示
  await page.getByRole('radio', { name: 'bottom 显示' }).filter({ hasText: 'bottom 显示' }).click()
  await expect(tabs).toHaveClass(/tiny-tabs--bottom/)
  await expect(tabsList).toHaveCount(2)
  await expect(top).toHaveClass('tiny-tabs__content')
  await expect(bottom).toHaveClass(/tiny-tabs__header/)

  // right显示
  await page.getByRole('radio', { name: 'right 显示' }).filter({ hasText: 'right 显示' }).click()
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
