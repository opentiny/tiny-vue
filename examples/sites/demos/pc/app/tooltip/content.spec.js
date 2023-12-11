import { test, expect } from '@playwright/test'

test('测试插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tooltip#content')

  const button1 = page.getByRole('button', { name: '鼠标悬浮到这里' }).nth(0)
  const tooltip1 = page.getByText('这是提示内容')
  const button2 = page.getByRole('button', { name: '鼠标悬浮到这里' }).nth(1)
  const tooltip2 = page.getByText('1. 提示内容')
  const button3 = page.getByRole('button', { name: '校验错误' })
  const tooltip3 = page.getByText('该网段不可用')

  await button1.hover()
  await expect(tooltip1).toBeVisible()
  await page.waitForTimeout(10)

  await button2.hover()
  await expect(tooltip2).toBeVisible()
  await page.waitForTimeout(10)

  await button3.hover()
  await expect(tooltip3).toBeVisible()
  await page.waitForTimeout(10)
})
