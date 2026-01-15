import { test, expect } from '@playwright/test'

test.describe('Rate Clearable 功能', () => {
  test('点击已选中的星星可以清零', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('rate#clearable')

    // Vue3示例中有两个rate，Vue2中只有一个
    // 先获取所有rate容器
    const rateContainers = page.locator('.tiny-rate')

    // 获取可清空的rate组件
    let clearableRate
    if ((await rateContainers.count()) > 1) {
      // Vue3：第二个rate是可清空的
      clearableRate = rateContainers.nth(1)
    } else {
      // Vue2：只有一个rate
      clearableRate = rateContainers.first()
    }

    const icon = clearableRate.locator('.tiny-rate__star > .tiny-svg')
    const text = clearableRate.locator('.tiny-rate__text')

    // 初始值为3，文本显示为"一般"
    await expect(text).toHaveText('一般')

    // 点击已选中的第3个星星，应该清零
    await icon.nth(2).click()
    await expect(text).toHaveText('')
  })

  test('未设置 clearable 时点击已选星星不会清零', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('rate#basic-usage')

    // 获取第一个rate组件
    const rate = page.locator('.tiny-rate').first()
    const icon = rate.locator('.tiny-rate__star > .tiny-svg')
    const text = rate.locator('.tiny-rate__text')

    // 初始值为2
    await expect(text).toHaveText('差')

    // 点击已选中的第2个星星，值应该保持不变
    await icon.nth(1).click()
    await expect(text).toHaveText('差')
  })

  test('clearable 模式下点击其他星星正常选择', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('rate#clearable')

    // Vue3示例中有两个rate，Vue2中只有一个
    // 先获取所有rate容器
    const rateContainers = page.locator('.tiny-rate')

    // 获取可清空的rate组件
    let clearableRate
    if ((await rateContainers.count()) > 1) {
      // Vue3：第二个rate是可清空的
      clearableRate = rateContainers.nth(1)
    } else {
      // Vue2：只有一个rate
      clearableRate = rateContainers.first()
    }

    const icon = clearableRate.locator('.tiny-rate__star > .tiny-svg')
    const text = clearableRate.locator('.tiny-rate__text')

    // 初始值为3
    await expect(text).toHaveText('一般')

    // 点击第1个星星，应该选择1
    await icon.nth(0).click()
    await expect(text).toHaveText('很差')

    // 再次点击第1个星星，应该清零
    await icon.nth(0).click()
    await expect(text).toHaveText('')

    // 点击第4个星星，应该选择4
    await icon.nth(3).click()
    await expect(text).toHaveText('好')
  })
})
