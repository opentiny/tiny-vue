import { test, expect } from '@playwright/test'

test('默认插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('radio#default-slot')

  const demo = page.locator('#default-slot')
  const radio1 = demo.getByRole('radio', { name: '内容一：选项描述' })
  const radio2 = demo.getByRole('radio', { name: '内容二：选项描述' })
  await expect(radio1).toBeVisible()
  await expect(radio2).toBeVisible()
})
