import { test, expect } from '@playwright/test'

test('配置式表格使用插槽测试', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-faq#faq-opSlot')
  await page.getByText('800').first().click()
  const span = page.getByText('800').first()
  const hasStyleAttr = await span.evaluate((span) => span.hasAttribute('style'))

  await expect(hasStyleAttr).toBe(true)
})
