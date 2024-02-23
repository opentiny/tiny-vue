import { test, expect } from '@playwright/test'

test('延迟隐藏', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popover#custom-popper')

  const button1 = page.getByRole('button', { name: '左侧位置弹出' })
  const pop1 = page.getByRole('tooltip', { name: '我是一段内容' })

  const button2 = page.getByRole('button', { name: '没有弹窗小箭头' })
  const pop2 = page.getByRole('tooltip', { name: '我是一段内容' })

  const button3 = page.getByRole('button', { name: '覆盖字体样式' })
  const pop3 = page.locator('.custom-popover-demo-cls')

  // 测试左侧弹出
  await button1.hover()
  await expect(pop1).toBeVisible()
  let box1 = await button1.boundingBox()
  let box2 = await pop1.boundingBox()
  expect(box1.x > box2.x + box2.width)
  await page.mouse.move(0, 0)
  await page.waitForTimeout(20)

  // 测试无箭头
  await button2.hover()
  await expect(pop2.locator('.popper__arrow')).toHaveCount(0)

  // 测试字体
  await button3.hover()
  await expect(pop3).toBeVisible()
  await expect(pop3).toHaveCSS('font-size', '16px')
})
