import { test, expect } from '@playwright/test'

test('点击按钮清空', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://127.0.0.1:7130/pc/filter-panel/clearable')

  const panel = page.locator('.tiny-filter-panel')
  const button = panel.locator('.tiny-filter-box')
  const popPanel = page.getByRole('tooltip', { name: '大于 等于 小于' })
  const clear = panel.locator('.filter-icon-close')

  await button.click()
  await expect(popPanel).toBeVisible()
  await page.getByRole('radio', { name: '等于' }).click()
  await expect(button).toHaveText('物品数量等于')
  await clear.click()
  await expect(button).toHaveText('物品数量')
})
