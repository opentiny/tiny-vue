import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('filter-panel#basic-usage')

  const panel = page.locator('.tiny-filter-panel')
  const button = panel.locator('.tiny-filter-box')
  const popPanel = page.getByRole('tooltip', { name: '大于 等于 小于' })
  const input = page.getByRole('tooltip', { name: '大于 等于 小于' }).getByRole('textbox')

  await button.click()
  await expect(popPanel).toBeVisible()
  await page.getByRole('radio', { name: '等于' }).click()
  await expect(button).toHaveText('物品数量等于')
  await input.click()
  await input.fill('10')
  await expect(button).toHaveText('物品数量等于10')
})
