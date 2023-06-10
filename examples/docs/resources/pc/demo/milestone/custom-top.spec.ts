import { test, expect } from '@playwright/test'

test('自定义节点上方内容', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('http://127.0.0.1:7130/pc/milestone/custom-top')

  const topTexts = page.locator('.tiny-milestone__node > span')
  const nodeCount = 6
  const texts = ['completed', 'completed', 'doing', 'cancel', 'back', 'end']

  await expect(topTexts).toHaveCount(nodeCount)
  for (let i = 0; i < nodeCount; i++) {
    await expect(topTexts.nth(i)).toHaveText(texts[i])
  }
})
