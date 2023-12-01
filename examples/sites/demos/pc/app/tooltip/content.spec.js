import { test, expect } from '@playwright/test'

test('测试插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tooltip#content')

  const button2 = page.getByRole('button', { name: '校验错误' })
  const tooltip2 = page.getByText('该网段不可用！可用网段：163')

  await button2.hover()
  await expect(tooltip2).toBeVisible()
})
