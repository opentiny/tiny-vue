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
import { isBrowser } from '../../browser'

const RAF = (function () {
  if (isBrowser) {
    return window.requestAnimationFrame.bind(window)
  }
  return function (callback) {
    setTimeout(() => callback(Date.now()), 1000 / 60)
  }
})()

const scheduleFlush = (fastdom) => {
  if (!fastdom.scheduled) {
    fastdom.scheduled = true
    fastdom.raf(flush.bind(null, fastdom))
  }
}

const flush = (fastdom) => {
  const { reads, writes } = fastdom
  let error

  try {
    fastdom.runTasks(reads)
    fastdom.runTasks(writes)
  } catch (e) {
    error = e
  }

  fastdom.scheduled = false

  if (reads.length || writes.length) scheduleFlush(fastdom)

  if (error) {
    if (fastdom.catch) {
      fastdom.catch(error)
    } else {
      throw error
    }
  }
}

const remove = (array, item) => {
  const index = array.indexOf(item)
  return !!~index && !!array.splice(index, 1)
}

const mixin = (target, source) => {
  for (let key in source) {
    if (Object.hasOwnProperty.call(source, key)) target[key] = source[key]
  }
}

class FastDom {
  constructor() {
    this.reads = []
    this.writes = []
    this.raf = RAF.bind(window)
  }

  runTasks(tasks) {
    let task
    // eslint-disable-next-line no-cond-assign
    while ((task = tasks.shift())) task()
  }

  measure(fn, ctx) {
    const task = !ctx ? fn : fn.bind(ctx)

    this.reads.push(task)

    scheduleFlush(this)

    return task
  }

  mutate(fn, ctx) {
    const task = !ctx ? fn : fn.bind(ctx)

    this.writes.push(task)

    scheduleFlush(this)

    return task
  }

  clear(task) {
    return remove(this.reads, task) || remove(this.writes, task)
  }

  extend(props) {
    if (!props || typeof props !== 'object') throw new Error('[TINY][FastDom] expected object')

    const child = Object.create(this)

    mixin(child, props)

    child.fastdom = this

    if (child.initialize) child.initialize()

    return child
  }
}

const fastdomSingleton = new FastDom()

export default fastdomSingleton
