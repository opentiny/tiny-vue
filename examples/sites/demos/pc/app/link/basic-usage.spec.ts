import { test, expect } from '@playwright/test'

test('基础用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('link#basic-usage')
  const preview = page.locator('#basic-usage')
  const link = preview.locator('a')

  await expect(link.first()).toHaveText('默认链接')
  await expect(link.nth(1)).toHaveText('默认链接2')
  await link.first().hover()
  await expect(link.first()).toHaveCSS('color', 'rgb(82, 110, 204)')

  // 测试点击
  const values = [] as string[]
  page.on('console', async (msg) => {
    for (const arg of msg.args()) {
      values.push(await arg.jsonValue())
    }
  })
  await link.first().click()

  expect(values[0]).toBe('clicked')
})
