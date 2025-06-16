const useTasksFinish = (tasksNum) => {
  let finishNum = 0
  let isAllFinish = false
  let doResolve

  const finishTask = () => {
    finishNum++
    if (finishNum === tasksNum) {
      isAllFinish = true
      doResolve(true)
    }
  }

  const waitTasks = async () => {
    if (isAllFinish) {
      return isAllFinish
    }
    return new Promise((resolve) => {
      doResolve = resolve
    })
  }

  return { finishTask, waitTasks }
}

export default useTasksFinish
