import { expect, test } from '@playwright/test'

test('click 事件是否触发弹窗', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())

  await page.goto('tag#tag-event-click')
  await page.waitForLoadState('networkidle')

  // 修正1：用 #tag-event-click 精确限定当前 demo
  // 修正2：点击标签文本内容，避免点到关闭按钮
  const tag = page.locator('#tag-event-click .tiny-tag').filter({ hasText: '标签一' })
  await expect(tag).toBeVisible()

  // 点击标签文本区域（避开关闭按钮）
  await tag.getByText('标签一').click()

  // 修正3：使用 getByText 定位消息提示，更通用
  const message = page.getByText('click 事件')
  await expect(message).toBeVisible()
})
