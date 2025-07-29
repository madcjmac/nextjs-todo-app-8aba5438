'use client'

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className={`flex items-center gap-3 p-3 rounded-lg border transition-all duration-200 ${
      todo.completed 
        ? 'bg-gray-50 border-gray-200' 
        : 'bg-white border-gray-300 hover:border-blue-300'
    }`}>
      <button
        onClick={() => onToggle(todo.id)}
        className={`flex-shrink-0 w-5 h-5 rounded-full border-2 transition-colors duration-200 ${
          todo.completed
            ? 'bg-green-500 border-green-500'
            : 'border-gray-300 hover:border-green-400'
        }`}
      >
        {todo.completed && (
          <span className="text-white text-xs flex justify-center items-center h-full">
            ✓
          </span>
        )}
      </button>
      
      <span className={`flex-1 ${
        todo.completed 
          ? 'text-gray-500 line-through' 
          : 'text-gray-800'
      }`}>
        {todo.text}
      </span>
      
      <button
        onClick={() => onDelete(todo.id)}
        className="flex-shrink-0 text-red-500 hover:text-red-600 font-medium transition-colors duration-200"
        aria-label="Delete todo"
      >
        ✕
      </button>
    </div>
  )
}
