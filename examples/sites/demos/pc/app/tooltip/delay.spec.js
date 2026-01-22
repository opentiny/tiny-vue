import { test, expect } from '@playwright/test'

test('测试延迟显示隐藏', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tooltip#delay')

  await page.getByRole('button', { name: '延迟 2s 出现' }).hover()
  const tip1 = page.getByRole('tooltip', { name: '延迟 2000ms 出现' })

  // 延迟出现
  await page.waitForTimeout(100)
  await expect(tip1).toBeHidden()
  await page.waitForTimeout(2010)
  await expect(tip1).toBeVisible()

  await page.getByRole('button', { name: '延迟 2s 关闭' }).hover()
  const tip2 = page.getByRole('tooltip', { name: '延迟 2000ms 关闭' })

  // 延迟关闭
  await page.waitForTimeout(10)
  await expect(tip2).toBeVisible()
  await page.mouse.move(0, 0)
  await page.waitForTimeout(2010)
  await expect(tip2).toBeHidden()

  await page.getByRole('button', { name: '2s 后自动隐藏' }).hover()
  const tip3 = page.getByRole('tooltip', { name: '2000ms 后自动隐藏' })

  // 自动隐藏
  await page.waitForTimeout(10)
  await expect(tip3).toBeVisible()
  await page.waitForTimeout(2010)
  await expect(tip2).toBeHidden()
})
