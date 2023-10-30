import { test, expect } from '@playwright/test'

test('默认插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('radio#radio-default')
  const radio1 = page.getByRole('radio', { name: '选项内容一选项描述' })
  const radio2 = page.getByRole('radio', { name: '选项内容二选项描述' })
  await expect(radio1).toBeVisible()
  await expect(radio2).toBeVisible()
})
