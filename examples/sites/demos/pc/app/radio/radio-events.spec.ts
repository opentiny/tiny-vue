import { test, expect } from '@playwright/test'

test('单选框事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('radio#radio-events')
  await page.getByRole('radio', { name: '选项二' }).click()
  const radio1 = page.locator('div').filter({ hasText: 'change 事件，选中的 Radio label 值为：2' }).nth(1)
  await expect(radio1).toBeVisible()

  await page.getByRole('radio', { name: '月度' }).first().click()
  const radio2 = page.locator('div').filter({ hasText: 'change 事件，选中的 Radio label 值为：2' }).nth(1)
  await expect(radio2).toBeVisible()
})
