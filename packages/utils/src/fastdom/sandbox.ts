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

const clearAll = (fastdom, tasks) => {
  let i = tasks.length

  while (i--) {
    fastdom.clear(tasks[i])
    tasks.splice(i, 1)
  }
}

const remove = (array, item) => {
  const index = array.indexOf(item)
  return !!~index && !!array.splice(index, 1)
}

class Sandbox {
  constructor(fastdom) {
    this.fastdom = fastdom
    this.tasks = []
  }

  measure(fn, ctx) {
    const tasks = this.tasks
    const task = this.fastdom.measure(function () {
      tasks.splice(tasks.indexOf(task))
      return fn.call(ctx)
    })

    tasks.push(task)

    return task
  }

  mutate(fn, ctx) {
    const tasks = this.tasks
    const task = this.fastdom.mutate(function () {
      tasks.splice(tasks.indexOf(task))
      return fn.call(ctx)
    })

    this.tasks.push(task)

    return task
  }

  clear(task) {
    if (!arguments.length) clearAll(this.fastdom, this.tasks)

    remove(this.tasks, task)

    return this.fastdom.clear(task)
  }
}

const exports = {
  sandbox() {
    return new Sandbox(this.fastdom)
  }
}

const fastdomSandbox = fastdomSingleton.extend(exports)

export default fastdomSandbox
