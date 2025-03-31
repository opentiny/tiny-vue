/**
 * MIT License
 *
 * Copyright (c) 2019 Xu Liangzhan
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */
import { extend } from '@opentiny/utils'
import GlobalConfig from '../../config'

// 全局参数设置
const setup = (options = {}) => {
  // 从全局配置中解构出图标和菜单配置
  let { icon, menu } = GlobalConfig

  // 如果传入了菜单配置,则将其与全局菜单配置深度合并
  // 使用extend(true, ...)进行深拷贝,避免修改原始对象
  if (options.menu) {
    menu = extend(true, {}, menu, options.menu)
  }

  // 如果传入了图标配置,则将其与全局图标配置深度合并
  // 使用extend(true, ...)进行深拷贝,避免修改原始对象
  if (options.icon) {
    icon = extend(true, {}, icon, options.icon)
  }

  // 将所有配置项深度合并到全局配置中
  // 注意:icon和menu需要单独传入以保持其引用不变
  // 这样可以确保其他地方对这些对象的引用依然有效
  extend(true, GlobalConfig, options, { icon, menu })
}

export default setup
