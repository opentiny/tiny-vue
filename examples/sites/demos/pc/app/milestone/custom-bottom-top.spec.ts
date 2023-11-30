import { test, expect } from '@playwright/test'

test('节点上下方内容', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('milestone#custom-bottom-top')

  const descList = page.locator('.tiny-milestone__description')
  const nodeCount = 6
  const topTexts = page.locator('.tiny-milestone__node > span')
  const texts = ['completed', 'completed', 'doing', 'cancel', 'back', 'end']

  await expect(descList).toHaveCount(nodeCount)
  for (let i = 0; i < nodeCount; i++) {
    const desc = new RegExp(`POR${i + 1} 2018-9-`)
    await expect(descList.nth(i)).toHaveText(desc)
    await expect(topTexts.nth(i)).toHaveText(texts[i])
  }
})
