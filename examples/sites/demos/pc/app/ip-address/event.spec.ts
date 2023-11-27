import { test, expect } from '@playwright/test'

test('ipAddress change事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('ip-address#event')

  const demo = page.locator('#event')
  const getIPAddressFirstInput = (index: number) =>
    demo.locator('.tiny-ip-address__input').nth(index).locator('input').first()
  const input = demo.getByRole('textbox')
  const modal = page.locator('.tiny-modal.active')

  // 聚焦、失焦事件

  // 每个输入框入内容改变并失焦时触发事件
  await getIPAddressFirstInput(0).click()
  await expect(modal.filter({ hasText: 'focus 事件触发了' })).toBeVisible()
  await getIPAddressFirstInput(0).blur()
  await expect(modal.filter({ hasText: 'blur 事件触发了' })).toBeVisible()

  // 内容改变事件
  await getIPAddressFirstInput(1).fill('111')
  await getIPAddressFirstInput(1).blur()
  await expect(modal.filter({ hasText: 'change 事件触发了' })).toBeVisible()

  // 输入事件事件
  await getIPAddressFirstInput(2).fill('111')
  await expect(modal.filter({ hasText: 'input 事件触发了' })).toBeVisible()

  // 选中事件
  const { x = 0, y = 0, width = 0 } = (await getIPAddressFirstInput(3).boundingBox()) || {}
  await page.mouse.move(x + width - 5, y + 5)
  await page.mouse.down()
  await page.mouse.move(x - 5, y + 5)
  await page.mouse.up()
  await expect(modal.filter({ hasText: 'select 事件触发了' })).toBeVisible()
})
