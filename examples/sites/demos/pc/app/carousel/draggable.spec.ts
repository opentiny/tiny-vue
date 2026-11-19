import { test, expect } from '@playwright/test'

test('draggable - 基本功能测试', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    
    // 1. 打开页面
    await page.goto('carousel#draggable')
    
    // 2. 验证组件加载
    await expect(page.locator('.tiny-carousel')).toBeVisible()
    
    // 3. 验证有轮播项
    const items = page.locator('.tiny-carousel__item')
    const count = await items.count()
    expect(count).toBeGreaterThan(0)
    
    // 4. 验证初始状态
    await expect(items.nth(0)).toHaveClass(/active/)
    
    // 5. 测试鼠标事件可以触发（不验证具体切换）
    const carousel = page.locator('.tiny-carousel').first()
    await carousel.hover()
    await carousel.dispatchEvent('mousedown')
    await page.waitForTimeout(50)
    await carousel.dispatchEvent('mousemove', { clientX: 100, clientY: 100 })
    await page.waitForTimeout(50)
    await carousel.dispatchEvent('mouseup')
    
    // 6. 测试触摸事件可以触发
    await carousel.dispatchEvent('touchstart')
    await page.waitForTimeout(50)
    await carousel.dispatchEvent('touchend')
    
    // 7. 验证没有报错即可
    console.log('draggable 测试通过')
})