import { Search } from 'lucide-react'

export function Header() {
  return (
    <header className="flex justify-between items-center p-6">
      <nav className="flex gap-8">
        <a href="#" className="text-white hover:text-red-400">Music</a>
        <a href="#" className="text-white hover:text-red-400">Podcast</a>
        <a href="#" className="text-white hover:text-red-400">Live</a>
        <a href="#" className="text-white hover:text-red-400">Radio</a>
      </nav>
      
      <div className="flex items-center gap-2 bg-black/20 rounded-full px-4 py-2">
        <Search className="w-5 h-5 text-gray-400" />
        <input 
          type="text" 
          placeholder="Search" 
          className="bg-transparent border-none text-white focus:outline-none"
          defaultValue="Michael Jackson"
        />
      </div>
    </header>
  )
}