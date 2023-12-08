import { test, expect } from '@playwright/test'

test('测试延迟显示隐藏', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tooltip#delay')

  const button1 = page.getByRole('button', { name: '延迟 2s 出现' })
  const tip1 = page.getByRole('tooltip', { name: '延迟 2000ms 出现' })
  // 延迟出现
  await page.waitForTimeout(100)
  await button1.hover()
  await page.waitForTimeout(100)
  await expect(tip1).toBeHidden()
})
