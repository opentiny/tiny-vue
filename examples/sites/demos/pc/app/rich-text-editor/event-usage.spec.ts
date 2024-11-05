import { test, expect } from '@playwright/test'

test('事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('rich-text-editor#event-usage')

  const wrap = page.locator('#event-usage')
  const editor = wrap.locator('.tiny-rich-text-editor > .tiny-rich-text-editor__container .ProseMirror')

  await expect(editor).toBeVisible()

  editor.focus()
  editor.blur()

  const logs: string[] = []
  // 将消息填充到 logs
  page.on('console', (msg) => logs.push(msg.text()))
  await expect(logs).toContain('beforeCreate')
  await expect(logs).toContain('transaction')
  await expect(logs).toContain('create')

  await expect(logs).toContain('focus')
  await expect(logs).toContain('blur')
})
