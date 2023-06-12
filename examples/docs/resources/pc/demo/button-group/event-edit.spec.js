import { test, expect } from '@playwright/test'

test('测试按钮组编辑事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/button-group/event-edit')
  await page.locator('#preview').getByRole('button').nth(4).click()
  const notify = page.locator('div').filter({ hasText: '编辑事件触发编辑事件' }).first()
  await expect(notify).toBeVisible()
  await page.locator('.tiny-notify__icon-close > .tiny-svg').click()
  await expect(notify).not.toBeVisible()
  const buttonGroup = page.locator('.tiny-button-group').nth(1)
  await expect(buttonGroup.locator('button').nth(2)).toHaveText('Button3')
  await page.locator('#preview').getByRole('button').nth(3).click()
  await page.getByText('Button5').click()
  await expect(buttonGroup.locator('button').nth(2)).toHaveText('Button5')
})
