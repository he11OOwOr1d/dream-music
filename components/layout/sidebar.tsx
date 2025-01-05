import { Home, TrendingUp, Library, Compass, Settings, LogOut } from 'lucide-react'
import Link from 'next/link'

export function Sidebar() {
  return (
    <div className="w-64 bg-black p-6 flex flex-col h-screen fixed left-0 top-0">
      <div className="flex items-center gap-2 mb-12">
        <div className="text-red-400 w-8 h-8">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </svg>
        </div>
        <span className="text-2xl font-semibold">
          <span className="text-red-400">Dream</span>
          <span className="text-white">Music</span>
        </span>
      </div>

      <div className="space-y-6 flex flex-col h-full">
        <div className="flex-1">
          <p className="text-gray-400 text-sm mb-4">MENU</p>
          <nav className="space-y-4">
            <Link href="#" className="flex items-center gap-4 text-white hover:text-red-400">
              <Home className="w-5 h-5" />
              Home
            </Link>
            <Link href="#" className="flex items-center gap-4 text-white hover:text-red-400">
              <TrendingUp className="w-5 h-5" />
              Trends
            </Link>
            <Link href="#" className="flex items-center gap-4 text-white hover:text-red-400">
              <Library className="w-5 h-5" />
              Library
            </Link>
            <Link href="#" className="flex items-center gap-4 text-white hover:text-red-400">
              <Compass className="w-5 h-5" />
              Discover
            </Link>
          </nav>
        </div>

        <div className="mt-auto">
          <p className="text-gray-400 text-sm mb-4">GENERAL</p>
          <nav className="space-y-4">
            <Link href="#" className="flex items-center gap-4 text-white hover:text-red-400">
              <Settings className="w-5 h-5" />
              Settings
            </Link>
            <Link href="#" className="flex items-center gap-4 text-white hover:text-red-400">
              <LogOut className="w-5 h-5" />
              Log Out
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}