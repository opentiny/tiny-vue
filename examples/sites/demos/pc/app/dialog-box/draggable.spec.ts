import { test, expect } from '@playwright/test'

test('dialogBox 可拖拽的弹窗', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dialog-box#draggable')

  const button = page.getByRole('button', { name: '可拖拽弹窗' })
  const notify = page.locator('.tiny-notify')
  const dialogBox = page.locator('.tiny-dialog-box')
  const header = dialogBox.locator('.tiny-dialog-box__header')

  await button.click()
  await expect(dialogBox).toBeVisible()

  // 获取拖拽元素的位置
  const { x, y } = await header.boundingBox()

  // 开始拖拽
  await page.mouse.move(x + 2, y + 2)
  await page.mouse.down()
  await page.mouse.move(x + 100, y + 100)
  await expect(notify.filter({ hasText: /^拖拽移动$/ })).toBeVisible()
  await expect(notify.filter({ hasText: /^拖拽开始$/ })).toBeVisible()
  await page.mouse.up()
  await expect(notify.filter({ hasText: /^拖拽结束$/ })).toBeVisible()
})
