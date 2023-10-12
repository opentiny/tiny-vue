import { test, expect } from '@playwright/test'

test('测试鼠标不可进入', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/tooltip/enterable')

  const button = page.getByRole('button', { name: '鼠标不能进入到 tooltip 中' })
  const tip = page.getByRole('tooltip', { name: '鼠标不能进入到 tooltip 中', includeHidden: true })

  await button.hover()
  await page.waitForTimeout(100)

  const box = await tip.boundingBox()
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2)
  await expect(tip).toBeHidden()
})
