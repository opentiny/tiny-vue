import { test, expect } from '@playwright/test'

test('自定义节点下方内容', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('http://127.0.0.1:7130/pc/milestone/custom-bottom')

  const descs = page.locator('.tiny-milestone__description > span')
  const nodeCount = 6

  await expect(descs).toHaveCount(nodeCount)
  for (let i = 0; i < nodeCount; i++) {
    const desc = new RegExp(`POR${i + 1} 2018-9-`)
    await expect(descs.nth(i)).toHaveText(desc)
  }
})
