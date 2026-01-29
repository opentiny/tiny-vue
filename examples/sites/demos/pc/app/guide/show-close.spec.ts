import { test, expect } from '@playwright/test'

test('关闭按钮', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('guide#show-close')

  // 测试显示关闭按钮的引导
  const showCloseBtn = page.locator('.show-close-btn')
  const guideWithClose = page.locator('.shepherd-element').first()

  await showCloseBtn.click()
  await expect(guideWithClose).toBeVisible()

  // 检查关闭按钮是否存在
  const closeBtn = guideWithClose.locator('.shepherd-cancel-icon')
  await expect(closeBtn).toBeVisible()

  // 点击关闭按钮关闭引导
  await closeBtn.click()
  await expect(guideWithClose).toBeHidden()

  // 测试隐藏关闭按钮的引导
  const hideCloseBtn = page.locator('.hide-close-btn')
  const guideWithoutClose = page.locator('.shepherd-element').first() // 第二个引导也是第一个shepherd-element

  await hideCloseBtn.click()
  await expect(guideWithoutClose).toBeVisible()

  // 验证关闭按钮不存在
  const closeBtnHidden = guideWithoutClose.locator('.shepherd-cancel-icon')
  await expect(closeBtnHidden).toBeHidden()

  // 通过完成按钮关闭引导
  const completeBtn = page.getByRole('button', { name: '下一步' })
  await completeBtn.click()
  await expect(guideWithoutClose).toBeHidden()
})
