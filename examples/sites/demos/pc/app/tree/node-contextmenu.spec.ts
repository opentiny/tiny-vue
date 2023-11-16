import { test, expect } from '@playwright/test'

test('鼠标右键点击节点事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#node-contextmenu')

  const node = page.getByRole('treeitem', { name: '三级 1-1-1' }).first()
  await node.click({ button: 'right' })
  await expect(page.getByText('当节点被鼠标右键点击时会触发该事件').first()).toBeVisible()
  await node.click()
  await expect(page.getByText('点击节点时触发的事件').first()).toBeVisible()
})
