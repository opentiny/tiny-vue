import { test, expect } from '@playwright/test'

test('纯段落用户引导', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('guide#only-content')

  const showBtn = page.getByRole('button', { name: '新手引导开始' })
  const nextBtn = page.getByRole('button', { name: '下一步' })
  const guideEle1 = page.getByRole('button', { name: '新手引导1' })
  const guideEle2 = page.getByRole('button', { name: '新手引导2' })
  const guide = page.getByRole('dialog')
  const arrow = guide.locator('.shepherd-arrow')

  // 引导1
  await showBtn.click()
  await expect(guide).toBeVisible()
  await expect(guide).toHaveClass(/only-content/)
  await expect(guide.locator('.shepherd-text')).toBeVisible()

  let guideEle1Box = await guideEle1.boundingBox()
  let guideEle2Box = await guideEle2.boundingBox()
  let guideBox = await guide.boundingBox()
  let arrowBox = await arrow.boundingBox()

  expect(guideBox.x + guideBox.width / 2).toBeGreaterThan(guideEle1Box.x)
  expect(guideBox.x + guideBox.width / 2).toBeLessThan(guideEle1Box.x + guideEle1Box.width)

  // 引导2
  await nextBtn.click()
  await expect(guide).toBeVisible()
  await expect(guide).toHaveClass(/only-content/)
  await expect(guide.locator('.shepherd-text')).toBeVisible()

  guideBox = await guide.boundingBox()
  arrowBox = await arrow.boundingBox()

  expect(guideBox.x + guideBox.width / 2).toBeGreaterThan(guideEle2Box.x)
  expect(guideBox.x + guideBox.width / 2).toBeLessThan(guideEle2Box.x + guideEle2Box.width)
})
