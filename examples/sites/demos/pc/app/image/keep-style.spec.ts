import { test, expect } from '@playwright/test'

test('测试样式属性保持', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())

  await page.goto('image#keep-style')
  const preview = page.locator('.pc-demo-container')
  await preview.locator('.tiny-image__inner').click()
  await page.waitForTimeout(50)

  // viewerImage 是插入到body末尾的。
  const viewerImage = page.locator('.tiny-image-viewer')
  const mask = viewerImage.locator('.tiny-image-viewer__mask')
  const toolbar = viewerImage.locator('.tiny-image-viewer__actions-inner')
  const canvas = viewerImage.locator('.tiny-image-viewer__img')

  // 验证出现
  await expect(viewerImage).toHaveCount(1)
  await expect(canvas).toHaveCount(1)
  await expect(mask).toHaveCSS('position', 'absolute')
  await expect(mask).toHaveCSS('background-color', 'rgba(0, 0, 0, 0.5)')
  await expect(canvas).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, 0)')

  // 点击缩小
  await toolbar.locator('svg').first().click()
  await page.waitForTimeout(20)
  await expect(canvas).toHaveCSS('transform', 'matrix(0.8, 0, 0, 0.8, 0, 0)')

  //   点击放大
  await toolbar.locator('svg').nth(1).click()
  await page.waitForTimeout(20)
  await expect(canvas).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, 0)')

  // 点击向左旋转
  await toolbar.locator('svg').nth(3).click()
  await page.waitForTimeout(20)
  await expect(canvas).toHaveCSS('transform', 'matrix(0, -1, 1, 0, 0, 0)')

  const prev = viewerImage.locator('.tiny-image-viewer__prev')
  const next = viewerImage.locator('.tiny-image-viewer__next')

  // // 点击切换
  await next.click()
  await page.waitForTimeout(20)
  await expect(canvas).toHaveAttribute('src', /house\.jpg/)

  await prev.click()
  await page.waitForTimeout(20)
  await prev.click()
  await page.waitForTimeout(20)
  await expect(canvas).toHaveAttribute('src', /bridge\.jpg/)

  // 点击关闭
  await viewerImage.locator('.tiny-image-viewer__close').click()
  await expect(viewerImage).toHaveCount(0)
})
