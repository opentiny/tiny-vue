import { test, expect } from '@playwright/test'

test('图片大图', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())

  await page.goto('image#preview')
  const preview = page.locator('.pc-demo-container')

  await preview.locator('.tiny-image__inner').click()
  const viewerImage = page.locator('.tiny-image-viewer')
  await expect(viewerImage).toHaveCount(1)

  const toolbar = viewerImage.locator('.tiny-image-viewer__actions-inner')
  const canvas = viewerImage.locator('.tiny-image-viewer__img')
  // 点击缩小
  await toolbar.locator('svg').first().click()
  await expect(canvas).toHaveCSS('transform', 'matrix(0.8, 0, 0, 0.8, 0, 0)')

  //   点击放大
  await toolbar.locator('svg').nth(1).click()
  await expect(canvas).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, 0)')

  // 点击向左旋转
  await toolbar.locator('svg').nth(3).click()
  await expect(canvas).toHaveCSS('transform', 'matrix(0, -1, 1, 0, 0, 0)')

  // // 点击切换上一张图片
  // let preImageSrc = await page.locator('.tiny-image-viewer__img').getAttribute('src')
  // await page.locator('span:nth-child(3) > .tiny-svg').click()
  // let currentImageSrc = await page.locator('.tiny-image-viewer__img').getAttribute('src')
  // await expect(preImageSrc).not.toEqual(currentImageSrc)
  // // 点击切换下一张图片
  // preImageSrc = await page.locator('.tiny-image-viewer__img').getAttribute('src')
  // await page.locator('span:nth-child(4) > .tiny-svg').click()
  // currentImageSrc = await page.locator('.tiny-image-viewer__img').getAttribute('src')
  // await expect(preImageSrc).not.toEqual(currentImageSrc)

  // 点击关闭
  await viewerImage.locator('.tiny-image-viewer__close').click()
  await expect(viewerImage).toHaveCount(0)
})
