import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        {/* Link vem do next e não do react-router-dom */}
        <Link className="p-2 bg-blue-500 hover:bg-blue-600 rounded-md" href="/todos">
          Todos
        </Link>
      </div>
    </main>
  )
}
