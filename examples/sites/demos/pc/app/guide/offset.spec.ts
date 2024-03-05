import { test, expect } from '@playwright/test'

test('引导框偏移量', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('guide#offset')

  const guideBtn1 = page.getByRole('button', { name: '默认' })
  const guideBtn2 = page.getByRole('button', { name: '纵轴偏移 50px' })
  const guide = page.getByRole('dialog')

  // 引导1 没有设置
  await guideBtn1.click()
  await expect(guide).toBeVisible()

  await page.waitForTimeout(500)
  const guideBox1 = await guide.boundingBox()

  // 引导2  50px
  await page.getByRole('button', { name: 'Close Tour' }).click()
  await guideBtn2.click()
  await expect(guide).toBeVisible()

  await page.waitForTimeout(500)
  const guideBox2 = await guide.boundingBox()

  await expect(guideBox1.y).toBeLessThan(guideBox2.y)
})
