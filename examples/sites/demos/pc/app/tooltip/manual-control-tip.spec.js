import { test, expect } from '@playwright/test'

test('测试手动控制tooltip', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tooltip#manual-control-tip')

  const button = page.getByRole('button', { name: '手动控制tooltip的显示和隐藏' })
  const tooltip = page.getByRole('tooltip', { name: '手动控制模式', includeHidden: true })

  await button.click()
  await expect(tooltip).toBeVisible()

  await page.waitForTimeout(300)

  await button.click()
  await expect(tooltip).toBeHidden()
})
