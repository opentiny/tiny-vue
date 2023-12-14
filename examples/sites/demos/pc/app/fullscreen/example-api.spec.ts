import { test, expect } from '@playwright/test'

test('Fullscreen 函数式使用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('fullscreen#example-api')

  const pageOnly = page.getByLabel('pageOnly')
  const teleport = page.getByLabel('teleport')
  const fullBtn = page.getByRole('button', { name: 'Request Fullscreen' })
  const exitFullBtn = page.getByRole('button', { name: 'Exit Fullscreen' })
  const smallImg = page.locator('.tiny-fullscreen-wrapper img').nth(0)
  const bigImg = page.locator('.tiny-fullscreen-wrapper img').nth(1)

  // 初始化完成，默认非全屏模式
  await expect(fullBtn).toBeVisible()
  await expect(exitFullBtn).toHaveCount(0)
  await expect(smallImg).not.toHaveCSS('display', 'none')
  await expect(bigImg).toHaveCSS('display', 'none')
  const document1 = await page.evaluate('document.fullscreenElement')
  await expect(document1).toBe(null)

  // 点击Request Fullscreen按钮，图片全屏展示
  await fullBtn.click()
  await expect(smallImg).toHaveCSS('display', 'none')
  await expect(bigImg).not.toHaveCSS('display', 'none')
  const document2 = await page.evaluate('document.fullscreenElement')
  await expect(document2).toBe('ref: <Node>')

  //  选取需要添加样式的元素并设置新的CSS属性
  await page.$eval('.tinyui-design-header', (el) => {
    el.setAttribute('style', 'display: none;')
  })

  // 点击Exit Fullscreen按钮，退出全屏展示
  await exitFullBtn.click()
  await expect(smallImg).not.toHaveCSS('display', 'none')
  await expect(bigImg).toHaveCSS('display', 'none')
  const document3 = await page.evaluate('document.fullscreenElement')
  await expect(document3).toBe(null)

  // pageOnly为true时，为网页全屏
  await pageOnly.check()
  await fullBtn.click()
  await expect(smallImg).toHaveCSS('display', 'none')
  await expect(bigImg).not.toHaveCSS('display', 'none')
  const document4 = await page.evaluate('document.fullscreenElement')
  await expect(document4).toBe(null)

  // pageOnly为false时，为浏览器全屏
  await exitFullBtn.click()
  await pageOnly.uncheck()
  await fullBtn.click()
  const document5 = await page.evaluate('document.fullscreenElement')
  await expect(document5).toBe('ref: <Node>')

  // teleport默认true，目标元素移到body下，反之false时不移动目标元素
  const document6 = await page.evaluate('document.fullscreenElement?.nodeName')
  await expect(document6).toBe('BODY')
  await exitFullBtn.click()
  await teleport.uncheck()
  await fullBtn.click()
  const document7 = await page.evaluate('document.fullscreenElement?.nodeName')
  await expect(document7).toBe('DIV')
})
