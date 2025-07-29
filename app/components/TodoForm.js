'use client'

import { useState } from 'react'

export default function TodoForm({ onAddTodo }) {
  const [input, setInput] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      onAddTodo(input)
      setInput('')
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What needs to be done?"
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 placeholder-gray-500"
          maxLength={100}
        />
        <button
          type="submit"
          disabled={!input.trim()}
          className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed px-6"
        >
          Add
        </button>
      </div>
    </form>
  )
}
