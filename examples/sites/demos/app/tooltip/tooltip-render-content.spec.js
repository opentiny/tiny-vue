import { test, expect } from '@playwright/test'

test('测试自定义渲染函数', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/tooltip/tooltip-render-content')

  const button = page.getByRole('button', { name: '自定义渲染函数的使用' })
  const tip = page.getByRole('tooltip', { name: '提示内容 提示内容' })

  await button.hover()
  await expect(tip).toBeVisible()
})
