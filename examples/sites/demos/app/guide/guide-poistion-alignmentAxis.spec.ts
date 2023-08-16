import { test, expect } from '@playwright/test'

test('引导框对齐轴距离', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/guide/guide-poistion-alignmentAxis')

  const guideBtn1 = page.getByRole('button', { name: '新手引导1' })
  const guideBtn2 = page.getByRole('button', { name: '新手引导2' })
  const guide = page.getByRole('dialog')
  const arrow = guide.locator('.shepherd-arrow')

  // 引导1 偏移量10
  await guideBtn1.click()
  await expect(guide).toBeVisible()
  await expect(arrow).toHaveCSS('left', '383.5px')

  // 引导2 偏移量20
  await page.getByRole('button', { name: 'Close Tour' }).click()
  await guideBtn2.click()
  await expect(guide).toBeVisible()
  await expect(arrow).toHaveCSS('left', '393.5px')
})
