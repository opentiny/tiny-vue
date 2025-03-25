import type { FilterPattern } from '@rollup/pluginutils'

export interface Options {
  /**
   * @default ["**\/*"]
   */
  include: FilterPattern
  /**
   * @default []
   */
  exclude: FilterPattern
  // 环境变量
  env: Record<string, string>
}

export type UserOptions = Partial<Options>

export type ResolvedOptions = Options
