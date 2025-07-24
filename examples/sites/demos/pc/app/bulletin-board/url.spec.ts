import { test, expect } from '@playwright/test'

test('BulletinBoard 基于 Url 的跳转', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('bulletin-board#url')

  const preview = page.locator('#url')
  const contentTitle = preview.locator('.tiny-bulletin-board__textTitle')

  // a 标签 href 属性值
  await expect(contentTitle).toHaveAttribute('href', 'localhost:3000/#/webcore/zh-CN/guide/changelog')
})
