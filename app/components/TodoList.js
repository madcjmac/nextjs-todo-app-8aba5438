'use client'

import TodoItem from './TodoItem'

export default function TodoList({ todos, onToggleTodo, onDeleteTodo }) {
  return (
    <div className="space-y-2 max-h-96 overflow-y-auto">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggleTodo}
          onDelete={onDeleteTodo}
        />
      ))}
    </div>
  )
}
