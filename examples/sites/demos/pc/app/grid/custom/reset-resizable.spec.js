import { test, expect } from '@playwright/test'

test.describe('手动重置列操作', () => {
  test('重置列宽', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('grid-customized#custom-resetResizable')
    const draggerDom = page.getByRole('cell', { name: '名称' }).locator('.tiny-grid-resizable')
    const thDom = page.getByRole('cell', { name: '名称' })
    // 获取初始列宽
    const { width: thWidth } = await thDom.boundingBox()
    // 获取拖拽元素位置
    const { x, y } = await draggerDom.boundingBox()
    // 开始拖拽
    await page.mouse.move(x + 2, y + 3)
    await page.waitForTimeout(200)
    await page.mouse.down()
    await page.waitForTimeout(200)
    await page.mouse.move(x + 15, y + 6)
    await page.waitForTimeout(200)
    await page.mouse.up()
    await page.waitForTimeout(200)
    // 拖拽完毕再次检测列宽
    const { width: lastThWidth } = await thDom.boundingBox()
    expect(thWidth).toBeLessThan(lastThWidth)
    await page.getByRole('button', { name: '重置列宽拖动操作' }).click()
    // 重置列宽
    const { width: resetWidth } = await thDom.boundingBox()
    expect(resetWidth).toEqual(thWidth)
  })

  test('重置列隐藏', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('grid-customized#custom-resetResizable')
    await page.locator('.tiny-grid-custom__setting-btn').click()
    await page.getByRole('row', { name: '名称 显示 未冻结' }).getByTitle('显示').getByRole('img').click()
    await page.getByRole('button', { name: '确定' }).click()
    const thHeader = page.locator('th.tiny-grid-header__column').nth(0)
    await expect(thHeader).toContainText('员工数')
    await page.getByRole('button', { name: '重置列的隐藏操作' }).click()
    const thHeader2 = page.locator('th.tiny-grid-header__column').nth(0)
    await expect(thHeader2).toContainText('名称')
  })
})
