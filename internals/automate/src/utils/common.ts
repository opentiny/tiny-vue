/* eslint-disable no-console */

import { execSync, exec } from 'node:child_process'
import path from 'node:path'
import chalk from 'chalk'
import { searchForWorkspaceRoot } from 'vite'

/*
 * 获取测试包的版本号
 * @param {name} 包名
 * @returns {string} 最新版本号
 */
export const getModuleVersion = ({ name }): string => {
  const packageName = name.replace(/[A-Z]/g, (c: string) => '-' + c.toLowerCase())
  const version = execSync(`npm v @opentiny/${packageName} version`).toString('utf-8').replace(/\n/, '')

  return version
}

/**
 * 解析参数得到项目根目录到文件的路径
 * @param {string[]} args 路径片段
 * @returns {string} 完整路径
 */
export const pathFromWorkspaceRoot = (...args: string[]): string => {
  const workspaceRoot = searchForWorkspaceRoot(process.cwd())
  return path.resolve(workspaceRoot, ...args)
}

/**
 * 使用exec方法执行命令,监听并打印命令行输出
 * @param {string} command 要执行的命令
 * @returns void
 */
export const execCommand = (command: string): void => {
  const childProcess = exec(command, (info) => {
    if (info) {
      console.log('[info] ', info)
    }
  })

  childProcess.stdout?.on('data', (data) => {
    if (data) {
      console.log(data)
    }
  })

  childProcess.stderr?.on('data', (err) => {
    if (err) {
      console.log(chalk.red(err))
    }
  })
}

/**
 * 控制台打印黄色信息
 * @param {string} str 待打印信息
 */
export const logYellow = (str: string): void => {
  console.log(chalk.yellow(str))
}

/**
 * 控制台打印绿色信息
 * @param {string} str 待打印信息
 */
export const logGreen = (str: string): void => {
  console.log(chalk.green(str))
}
