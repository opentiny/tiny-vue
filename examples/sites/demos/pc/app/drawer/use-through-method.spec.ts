import { test, expect } from '@playwright/test'

test('通过方法调用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('drawer#use-through-method')
  const demo = page.locator('#use-through-method')
  const notify = page.locator('.tiny-notify__title')
  await demo.getByRole('button', { name: '点击打开抽屉' }).click()
  await page.locator('.tiny-notify__icon-close > .tiny-svg').click()
  await page.getByRole('button', { name: '点击关闭' }).click()
  await expect(notify).toHaveText('close 事件')
})
