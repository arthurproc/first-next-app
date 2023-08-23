import Link from "next/link"

function ReposLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-md shadow-md">
      <Link href="/" className="p-2 bg-blue-500 hover:bg-blue-600 rounded-md">
        Voltar
      </Link>
      {children}
    </div>
  )
}
export default ReposLayout