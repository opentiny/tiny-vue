import { test, expect } from '@playwright/test'

test('dialogBox 弹窗的宽度', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dialog-box#dialog-width')

  const preview = page.locator('#preview')
  const weightBtn1 = preview.getByRole('button', { name: '宽度30%' })
  const weightBtn2 = preview.getByRole('button', { name: '宽度60%' })
  const dialogBox = preview.locator('.tiny-dialog-box')

  // dialogBox 30% 的宽度
  await weightBtn1.click()
  await expect(dialogBox.nth(0)).toBeVisible()
  const { width: width1 } = await dialogBox.nth(0).boundingBox()
  expect(Math.round(width1)).toEqual(384)
  await page.locator('body').press('Escape')

  // dialogBox 60% 的宽度
  await weightBtn2.click()
  await expect(dialogBox.nth(1)).toBeVisible()
  const { width: width2 } = await dialogBox.nth(1).boundingBox()
  expect(Math.round(width2)).toEqual(768)
})
