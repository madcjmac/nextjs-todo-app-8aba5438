import TodoApp from './components/TodoApp'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="container mx-auto px-4">
        <TodoApp />
      </div>
    </main>
  )
}
