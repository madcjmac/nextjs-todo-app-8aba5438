'use client'

export default function TodoFilters({ 
  filter, 
  onFilterChange, 
  activeCount, 
  completedCount 
}) {
  const filters = [
    { key: 'all', label: 'All', count: activeCount + completedCount },
    { key: 'active', label: 'Active', count: activeCount },
    { key: 'completed', label: 'Completed', count: completedCount },
  ]
  
  return (
    <div className="flex justify-between items-center mb-6 p-4 bg-gray-50 rounded-lg">
      <div className="flex gap-1">
        {filters.map(({ key, label, count }) => (
          <button
            key={key}
            onClick={() => onFilterChange(key)}
            className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${
              filter === key
                ? 'bg-blue-500 text-white'
                : 'text-gray-600 hover:bg-gray-200'
            }`}
          >
            {label} ({count})
          </button>
        ))}
      </div>
      
      <div className="text-sm text-gray-600">
        {activeCount > 0 ? (
          <span>{activeCount} item{activeCount !== 1 ? 's' : ''} left</span>
        ) : (
          <span>All done! 🎉</span>
        )}
      </div>
    </div>
  )
}
