import { test, expect } from '@playwright/test'

test('组件式使用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('fullscreen#example-component')

  const pageOnly = page.getByLabel('pageOnly')
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

  //  选取需要添加样式的元素并设置新的CSS属性
  await page.$eval('.tinyui-design-header', (el) => {
    el.setAttribute('style', 'display: none;')
  })

  // // 点击Exit Fullscreen按钮，退出全屏展示
  await exitFullBtn.click()
  await expect(smallImg).not.toHaveCSS('display', 'none')
  await expect(bigImg).toHaveCSS('display', 'none')

  // TINY-TODO: 全屏时，按Esc键退出全屏图片有问题

  // pageOnly为true时，为网页全屏
  await pageOnly.check()
  await fullBtn.click()
  await expect(smallImg).toHaveCSS('display', 'none')
  await expect(bigImg).not.toHaveCSS('display', 'none')

  // TINY-TODO: 因全屏模式下获取不到元素   pageOnly  teleport区别暂未测试
})
