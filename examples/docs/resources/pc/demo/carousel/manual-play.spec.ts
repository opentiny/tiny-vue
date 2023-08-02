import { test, expect } from '@playwright/test'

test('手动轮播', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/carousel/manual-play')
  const preview = page.locator('#preview')
  const carouselItems = preview.locator('div.tiny-carousel__item')
  const numButtons = preview.locator('#num').getByRole('button')

  // 减一
  await numButtons.first().click()
  // 当前应该显示第二张幻灯片
  await expect(carouselItems.nth(1)).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, 0)')
  // 加一
  await numButtons.nth(1).click()
  // 当前应该显示第三张幻灯片
  await expect(carouselItems.nth(2)).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, 0)')
  // 点击上一张按钮
  await page.getByRole('button', { name: '上一张' }).click()
  // 当前应该显示第二张幻灯片
  await expect(carouselItems.nth(1)).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, 0)')
  // 点击下一张按钮
  await page.getByRole('button', { name: '下一张' }).click()
  // 当前应该显示第三张幻灯片
  await expect(carouselItems.nth(2)).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, 0)')
  // 指定一个序号
  await page.getByRole('spinbutton').fill('4')
  await page.getByRole('spinbutton').blur()
  // 当前应该显示第四张幻灯片
  await expect(carouselItems.nth(3)).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, 0)')
})
