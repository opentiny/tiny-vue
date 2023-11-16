import { test, expect } from '@playwright/test'

test('测试插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tooltip#tooltip-content')

  const button1 = page.getByRole('button', { name: '插槽的使用' })
  const button2 = page.getByRole('button', { name: '校验错误' })
  const tooltip1 = page.getByText('通过 slot = "content" 自定义提示内容')
  const tooltip2 = page.getByText('该网段不可用！可用网段：163')

  await button1.hover()
  await expect(tooltip1).toBeVisible

  await page.waitForTimeout(300)

  await button2.hover()
  await expect(tooltip2).toBeVisible()
})
