import { test, expect } from '@playwright/test'

test('change事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('anchor#change')

  const anchor = page.locator('.tiny-anchor')
  const link1 = anchor.getByRole('link', { name: '演示' })
  const link2 = anchor.getByRole('link', { name: 'change 事件' })

  const values = [] as string[]
  page.on('console', async (msg) => {
    for (const arg of msg.args()) {
      values.push(await arg.jsonValue())
    }
  })
  await link1.click()
  await link2.click()
  expect(values.length).toBe(3)
  expect(values[0].startsWith('当前锚点#demonstrate')).toBeTruthy()
})
