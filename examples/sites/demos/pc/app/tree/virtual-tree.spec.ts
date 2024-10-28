import { test, expect } from '@playwright/test'

test('测试虚拟tree的基本使用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#virtual-tree')

  const preview = page.locator('.pc-demo-container')
  const tree = preview.locator('.tiny-tree')
  const vScroll = tree.locator('.tiny-virtual-scroll')
  const scrollItem = vScroll.locator('.virtual-scroll-item')
  await expect(preview).toBeVisible()
  await expect(tree).toBeVisible()
  await expect(vScroll).toBeVisible()
  await expect(scrollItem.nth(0)).toBeVisible()

  await expect(scrollItem.nth(0)).toHaveText('数据 0')

  const height = await page.evaluate(() => {
    const contextElement = document.querySelector('.virtual-scroll-context')
    return contextElement ? contextElement.style.height : null
  })
  const heightNumber = height ? parseInt(height.replace('px', '')) : 0
  await vScroll.evaluate((scroll, targetHeight) => {
    scroll.scrollTo(0, targetHeight)
  }, heightNumber)

  await page.waitForTimeout(500)
  await vScroll.evaluate((scroll) => {
    scroll.scrollTo(0, 0)
  })
  const firstNode = scrollItem.nth(0)
  await firstNode.click()
  let afterClickHeight = await page.evaluate(() => {
    const contextElement = document.querySelector('.virtual-scroll-context')
    return contextElement ? contextElement.style.height : null
  })
  const afterClickHeightNumber = afterClickHeight ? parseInt(afterClickHeight.replace('px', '')) : 0
  const heightChanged = height !== afterClickHeightNumber
  if (heightChanged) {
    console.log('节点可以收缩')
  } else {
    console.log('节点高度未发生变化，可能无法收缩')
  }
})
