import { test, expect } from '@playwright/test'

test('引导框偏移量', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('guide#offset')

  const guideBtn1 = page.getByRole('button', { name: '新手引导1' })
  const guideBtn2 = page.getByRole('button', { name: '新手引导2' })
  const guide = page.getByRole('dialog')

  // 引导1 没有设置
  await guideBtn1.click()
  await expect(guide).toBeVisible()

  const guideBox1 = await guide.boundingBox()

  // 引导2  50px
  await page.getByRole('button', { name: 'Close Tour' }).click()
  await guideBtn2.click()
  await expect(guide).toBeVisible()

  const guideBox2 = await guide.boundingBox()

  expect(guideBox1.y).toBeLessThan(guideBox2.y)
})
