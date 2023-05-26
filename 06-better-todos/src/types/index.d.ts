export type Todo = {
	id?: number
	title: string
	completed: boolean
}
export type PartialTodo = Partial<Todo>

export type Todos = Todo[]
