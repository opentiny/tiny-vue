import { test, expect } from '@playwright/test'

test('测试按钮禁用事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('button#reset-time')

  const defalutDisabled = page.getByRole('button', { name: '默认禁用' })
  const noDisabled = page.getByRole('button', { name: '无禁用' })
  const fiveSecondDisabled = page.getByRole('button', { name: '禁用 5 秒' })

  // 默认禁用1S
  await defalutDisabled.click()
  await expect(defalutDisabled).toBeDisabled()
  await page.waitForTimeout(1000)
  await expect(defalutDisabled).not.toBeDisabled()

  // 无禁用
  await noDisabled.click()
  await expect(noDisabled).not.toBeDisabled()

  // 自定义禁用5s
  await fiveSecondDisabled.click()
  await expect(fiveSecondDisabled).toBeDisabled()
  await page.waitForTimeout(5000)
  await expect(fiveSecondDisabled).not.toBeDisabled()
})
