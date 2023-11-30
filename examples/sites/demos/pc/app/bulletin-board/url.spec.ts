import { test, expect } from '@playwright/test'

test('BulletinBoard 基于Url的跳转(', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('bulletin-board#url')

  const preview = page.locator('#preview')
  const contentTitle = preview.locator('.tiny-bulletin-board__textTitle')

  // a标签href属性值
  expect(await contentTitle.getAttribute('href')).toBe('localhost:3000/#/webcore/zh-CN/guide/changelog')
})
