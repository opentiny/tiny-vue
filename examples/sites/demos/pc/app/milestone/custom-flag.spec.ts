import { test, expect } from '@playwright/test'

test('自定义旗帜内容', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('milestone#custom-flag')

  const flags = page.locator('.tiny-milestone__flag-content > span')
  const flagContents = ['引导用户按照流程完成任务', '欢迎使用vui', 'test8', 'test6']
  const flagCount = 4

  await expect(flags).toHaveCount(flagCount)
  for (let i = 0; i < flagCount; i++) {
    await expect(flags.nth(i)).toHaveText(flagContents[i])
  }
})
