import { test, expect } from '@playwright/test'

test('标签页切换表格', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tabs#show-different-grid-data')

  const tabA = page.getByRole('tab', { name: '表格组件A' })
  const tabB = page.getByRole('tab', { name: '表格组件B' })
  const content = page.getByRole('tabpanel').locator('.tiny-grid-header__column').first()

  await expect(content).toHaveCSS('width', '50px')
  await tabA.click()
  await expect(content).toHaveCSS('width', '60px')
  await tabB.click()
  await expect(content).toHaveCSS('width', '50px')
})
