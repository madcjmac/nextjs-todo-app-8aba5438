'use client'

import { useState, useEffect } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import TodoFilters from './TodoFilters'

export default function TodoApp() {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')
  
  // Load todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('nextjs-todos')
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos))
    }
  }, [])
  
  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('nextjs-todos', JSON.stringify(todos))
  }, [todos])
  
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    }
    setTodos(prev => [newTodo, ...prev])
  }
  
  const toggleTodo = (id) => {
    setTodos(prev => prev.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }
  
  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }
  
  const clearCompleted = () => {
    setTodos(prev => prev.filter(todo => !todo.completed))
  }
  
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })
  
  const completedCount = todos.filter(todo => todo.completed).length
  const activeCount = todos.length - completedCount
  
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          📝 Next.js Todo App
        </h1>
        <p className="text-gray-600">
          Built with Next.js v13+ App Router & Tailwind CSS
        </p>
      </header>
      
      <TodoForm onAddTodo={addTodo} />
      
      <div className="mt-8">
        <TodoFilters 
          filter={filter} 
          onFilterChange={setFilter}
          activeCount={activeCount}
          completedCount={completedCount}
        />
        
        <TodoList 
          todos={filteredTodos}
          onToggleTodo={toggleTodo}
          onDeleteTodo={deleteTodo}
        />
        
        {completedCount > 0 && (
          <div className="text-center mt-6">
            <button
              onClick={clearCompleted}
              className="text-red-500 hover:text-red-600 font-medium transition-colors duration-200"
            >
              Clear Completed ({completedCount})
            </button>
          </div>
        )}
        
        {todos.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <p className="text-xl">🎉 All caught up!</p>
            <p className="mt-2">Add your first todo above</p>
          </div>
        )}
      </div>
    </div>
  )
}
