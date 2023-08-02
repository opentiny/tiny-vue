import { test, expect } from '@playwright/test';

test('尝试拖拽左侧某一项至右侧面板', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull());
    await page.goto('http://localhost:7130/pc/transfer/drop-config');
    const preview = page.locator('#preview');
    const transferPanels = preview.locator('.tiny-transfer-panel');
    const leftPanel = transferPanels.first();
    const rightPanel = transferPanels.nth(1);
    const dragDiv = leftPanel.locator('label:nth-child(2)').first();
    await dragDiv.hover();
    await page.mouse.down();
    await rightPanel.hover();
    await page.mouse.up();
    await expect(rightPanel.locator('.tiny-transfer-panel__header').filter({ hasText: '列表 2 0 / 5' })).toHaveCount(1);
    await expect(leftPanel.locator('.tiny-transfer-panel__header').filter({ hasText: '列表 1 0 / 11' })).toHaveCount(1);
})

test('尝试拖拽右侧某一项至左侧面板', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull());
    await page.goto('http://localhost:7130/pc/transfer/drop-config');
    const preview = page.locator('#preview');
    const transferPanels = preview.locator('.tiny-transfer-panel');
    const leftPanel = transferPanels.first();
    const rightPanel = transferPanels.nth(1);
    const dragDiv = rightPanel.locator('label').filter({ hasText: '备选项 3' });
    await dragDiv.hover();
    await page.mouse.down();
    await leftPanel.hover();
    await page.mouse.up();
    await expect(leftPanel.locator('.tiny-transfer-panel__header').filter({ hasText: '列表 1 0 / 13' })).toHaveCount(1);
    await expect(rightPanel.locator('.tiny-transfer-panel__header').filter({ hasText: '列表 2 0 / 3' })).toHaveCount(1);
})