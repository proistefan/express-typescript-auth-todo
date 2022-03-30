interface ITodo {
  description: string
  completed: boolean
}

interface ITodoAdd {
  description: ITodo['description']
}

interface ITodoUpdate {
  completed: ITodo['completed']
}

export {
  ITodo,
  ITodoAdd,
  ITodoUpdate
}
