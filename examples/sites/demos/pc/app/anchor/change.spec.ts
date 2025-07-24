import { test, expect } from '@playwright/test'

test('change 事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('anchor#change')

  const anchor = page.locator('.tiny-anchor')
  const link1 = anchor.getByRole('link', { name: '基本用法' })
  const link2 = anchor.getByRole('link', { name: 'change 事件' })

  const values = [] as string[]
  page.on('console', async (msg) => {
    for (const arg of msg.args()) {
      const text = await arg.jsonValue()
      if (text.includes('当前锚点')) {
        values.push(text)
      }
    }
  })
  await link1.click()
  await link2.click()
  expect(values.length).toBe(2)
  expect(values[0].startsWith('当前锚点#basic-usage')).toBeTruthy()
})
