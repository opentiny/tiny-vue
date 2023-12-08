import { test, expect } from '@playwright/test'

test('测试是否显示箭头', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tooltip#custom-popper')

  const button = page.getByRole('button', { name: '鼠标悬浮在这里' })
  const tip = page.getByText('我是提示内容')
  const arrow = tip.locator('div.popper__arrow')

  await button.hover()
  await expect(arrow).toHaveCount(1)
})
