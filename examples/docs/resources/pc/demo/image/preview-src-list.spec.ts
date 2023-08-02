import { test, expect } from '@playwright/test'

test('图片大图', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/image/preview-src-list')
  await page.locator('.tiny-image__inner').click()
  const Image = page.locator('.tiny-image-viewer__img')

  // 点击缩小
  await page.locator('.icon').first().click()
  await expect(Image).toHaveCSS('transform', 'matrix(0.8, 0, 0, 0.8, 0, 0)')

  //   点击放大
  await page.locator('svg:nth-child(2)').first().click()
  await expect(Image).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, 0)')

  // 点击放大图标
  await page.locator('svg:nth-child(4)').click()

  // 点击向左旋转
  await page.locator('svg:nth-child(6)').click()
  await expect(Image).toHaveCSS('transform', 'matrix(0, -1, 1, 0, 0, 0)')
  // 点击向右旋转
  await page.locator('svg:nth-child(7)').click()
  await expect(Image).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, 0)')

  // 点击切换上一张图片
  let preImageSrc = await page.locator('.tiny-image-viewer__img').getAttribute('src')
  await page.locator('span:nth-child(3) > .tiny-svg').click()
  let currentImageSrc = await page.locator('.tiny-image-viewer__img').getAttribute('src')
  await expect(preImageSrc).not.toEqual(currentImageSrc)
  // 点击切换下一张图片
  preImageSrc = await page.locator('.tiny-image-viewer__img').getAttribute('src')
  await page.locator('span:nth-child(4) > .tiny-svg').click()
  currentImageSrc = await page.locator('.tiny-image-viewer__img').getAttribute('src')
  await expect(preImageSrc).not.toEqual(currentImageSrc)
})
