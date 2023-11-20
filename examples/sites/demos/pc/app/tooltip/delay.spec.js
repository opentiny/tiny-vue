import { test, expect } from '@playwright/test'

test('测试延迟显示隐藏', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tooltip#open-delay')

  const button1 = page.getByRole('button', { name: '延迟 2s 出现' })
  const button2 = page.getByRole('button', { name: '2s 后自动隐藏' })
  const tip1 = page.getByRole('tooltip', { name: '延迟 2000ms 出现' })
  const tip2 = page.getByRole('tooltip', { name: '2000ms后自动隐藏' })

  // 延迟出现
  await button1.hover()
  await page.waitForTimeout(300)
  await expect(tip1).toBeHidden()

  await page.waitForTimeout(2000)
  await expect(tip1).toBeVisible()

  await page.waitForTimeout(300)

  // 延迟隐藏
  await button2.hover()
  await page.waitForTimeout(300)
  await expect(tip2).toBeVisible()

  await page.waitForTimeout(2000)
  await expect(tip2).toBeHidden()
})
