import { test, expect } from '@playwright/test'

test('自动关闭延时', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('notify#duration')
  await page.getByRole('button', { name: '默认4500 ms后自动关闭提示框' }).click()
  await page.waitForSelector('.tiny-notify')
  await page.waitForTimeout(4500)
  await page.waitForSelector('.tiny-notify', { state: 'hidden' })

  await page.getByRole('button', { name: '500ms后自动关闭提示框' }).click()
  await page.waitForSelector('.tiny-notify')
  await page.waitForTimeout(500)
  await page.waitForSelector('.tiny-notify', { state: 'hidden' })

  await page.getByRole('button', { name: '5000ms后自动关闭提示框' }).click()
  await page.waitForSelector('.tiny-notify')
  await page.waitForTimeout(5000)
  await page.waitForSelector('.tiny-notify', { state: 'hidden' })
})
