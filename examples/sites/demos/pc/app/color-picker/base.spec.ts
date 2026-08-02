import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('color-picker#basic-usage')
  await page.locator('.tiny-color-picker__inner').click()
  await page.locator('.black').click()
  await page.getByRole('button', { name: '确定' }).click()
  await page.locator('.tiny-color-picker__inner').click()
  await page.locator('.tiny-color-select-panel__inner__color-select').click()
  await page.getByRole('button', { name: '确定' }).click()
})

test('在 hex 输入框内拖选文本、鼠标移出面板后松开，面板不应误关闭', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('color-picker#basic-usage')
  await page.locator('.tiny-color-picker__inner').click()

  const panel = page.locator('.tiny-color-select-panel')
  await expect(panel).toBeVisible()

  const input = panel.locator('.tiny-color-select-panel__tools-hex1 input')
  const box = await input.boundingBox()
  expect(box).not.toBeNull()

  // 模拟用户拖选 hex 输入框文本：在输入框内按下，拖出面板后松开
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2)
  await page.mouse.down()
  await page.mouse.move(box.x - 300, box.y + box.height / 2, { steps: 10 })
  await page.mouse.up()

  // mousedown 发生在面板内部，拖选不应被误判为「点击外部」而关闭面板
  await expect(panel).toBeVisible()
})
