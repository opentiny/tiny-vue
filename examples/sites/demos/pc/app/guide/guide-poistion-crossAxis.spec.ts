import { test, expect } from '@playwright/test'

test('引导框横轴距离', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('guide#guide-poistion-crossAxis')

  const guideBtn1 = page.getByRole('button', { name: '新手引导1' })
  const guideBtn2 = page.getByRole('button', { name: '新手引导2' })
  const guide = page.getByRole('dialog')
  const arrow = guide.locator('.shepherd-arrow')

  // 引导1 距离10
  await guideBtn1.click()
  await expect(guide).toBeVisible()
  await expect(arrow).toHaveCSS('left', '363.5px')

  // 引导2 距离20
  await page.getByRole('button', { name: 'Close Tour' }).click()
  await guideBtn2.click()
  await expect(guide).toBeVisible()
  await expect(arrow).toHaveCSS('left', '353.5px')
})
