import { test, expect } from '@playwright/test'

test('数据格式转换', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('fluent-editor#data-switch')
  const demo = page.locator('#data-switch')
  await page.locator('#data-switch').getByText('Hello FluentEditor!').click()
  await page.locator('#data-switch #editor div').filter({ hasText: 'Hello FluentEditor!' }).press('ControlOrMeta+a')
  await page.locator('#data-switch').getByLabel('clean').click()
  const cls = demo.locator('.ql-editor p')
  await expect(cls).not.toHaveClass('.ql-editor strong')
})
