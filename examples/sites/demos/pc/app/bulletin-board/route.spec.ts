import { test, expect } from '@playwright/test'

test('BulletinBoard 基于Route的跳转(', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('bulletin-board#route')

  const preview = page.locator('#preview')
  const contentTitle = preview.locator('.tiny-bulletin-board__textTitle')

  // 判断a标签href属性值
  expect(await contentTitle.getAttribute('href')).toBe('/#/Alert')
})
