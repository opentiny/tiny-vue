/**
 * FastDom
 *
 * Eliminates layout thrashing
 * by batching DOM read/write
 * interactions.
 *
 * @author Wilson Page <wilsonpage@me.com>
 * @author Kornel Lesinski <kornel.lesinski@ft.com>
 */

import fastdomSingleton from './singleton'

const create = (promised, type, fn, ctx) => {
  const tasks = promised._tasks
  const fastdom = promised.fastdom
  let task

  const promise = new Promise(function (resolve, reject) {
    task = fastdom[type](function () {
      tasks.delete(promise)

      try {
        resolve(ctx ? fn.call(ctx) : fn())
      } catch (e) {
        reject(e)
      }
    }, ctx)
  })

  tasks.set(promise, task)

  return promise
}

const exports = {
  initialize() {
    this._tasks = new Map()
  },

  mutate(fn, ctx) {
    return create(this, 'mutate', fn, ctx)
  },

  measure(fn, ctx) {
    return create(this, 'measure', fn, ctx)
  },

  clear(promise) {
    const tasks = this._tasks
    const task = tasks.get(promise)
    this.fastdom.clear(task)
    tasks.delete(promise)
  }
}

const fastdomAsync = fastdomSingleton.extend(exports)

export default fastdomAsync
