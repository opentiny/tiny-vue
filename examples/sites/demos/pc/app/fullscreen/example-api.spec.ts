import { test, expect } from '@playwright/test'

test('Fullscreen 函数式使用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('fullscreen#example-api')

  const pageOnly = page.getByLabel('pageOnly')
  const teleport = page.getByLabel('teleport')
  const fullBtn = page.getByRole('button', { name: 'Request Fullscreen' })
  const exitFullBtn = page.getByRole('button', { name: 'Exit Fullscreen' })
  const smallImg = page.locator('img').first()
  const bigImg = page.locator('img').last()

  // 初始化完成，默认非全屏模式
  await expect(fullBtn).toBeVisible()
  await expect(exitFullBtn).toHaveCount(0)
  await expect(smallImg).not.toHaveCSS('display', 'none')
  await expect(bigImg).toHaveCSS('display', 'none')
  expect(await page.evaluate('document.fullscreenElement')).toBe(null)

  // 点击Request Fullscreen按钮，图片全屏展示
  await fullBtn.click()
  await expect(smallImg).toHaveCSS('display', 'none')
  await expect(bigImg).not.toHaveCSS('display', 'none')
  expect(await page.evaluate('document.fullscreenElement')).toBe('ref: <Node>')

  // 点击Exit Fullscreen按钮，退出全屏展示
  await exitFullBtn.click()
  await expect(smallImg).not.toHaveCSS('display', 'none')
  await expect(bigImg).toHaveCSS('display', 'none')
  expect(await page.evaluate('document.fullscreenElement')).toBe(null)

  // pageOnly为true时，为网页全屏
  await pageOnly.check()
  await fullBtn.click()
  await expect(smallImg).toHaveCSS('display', 'none')
  await expect(bigImg).not.toHaveCSS('display', 'none')
  expect(await page.evaluate('document.fullscreenElement')).toBe(null)

  // pageOnly为false时，为浏览器全屏
  await exitFullBtn.click()
  await pageOnly.uncheck()
  await fullBtn.click()
  expect(await page.evaluate('document.fullscreenElement')).toBe('ref: <Node>')

  // teleport默认true，目标元素移到body下，反之false时不移动目标元素
  expect(await page.evaluate('document.fullscreenElement?.nodeName')).toBe('BODY') // 默认true时
  await exitFullBtn.click()
  await teleport.uncheck()
  await fullBtn.click()
  expect(await page.evaluate('document.fullscreenElement?.nodeName')).toBe('DIV')
})
