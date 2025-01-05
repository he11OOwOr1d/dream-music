import { Shuffle, SkipBack, Play, SkipForward, Repeat } from 'lucide-react'
import Image from 'next/image'

export function MiniPlayer() {
  return (
    <div className="bg-red-950 rounded-xl p-3 w-64 border my-[550px] border-red-900">
      <div className="flex flex-col items-center">
        <Image
          src="/michael-jackson.jpg"
          alt="Now playing"
          width={200}
          height={200}
          className="rounded-lg mb-4 w-full"
        />
        <h3 className="text-white font-semibold text-sm mb-0.5">Beat It</h3>
        <p className="text-gray-400 text-xs mb-3">Michael Jackson</p>
        
        <div className="w-full mb-4">
          <div className="bg-white/20 h-1 rounded-full w-full">
            <div className="bg-white h-1 rounded-full w-1/2" />
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>2:15</span>
            <span>4:18</span>
          </div>
        </div>
        
        <div className="flex items-center justify-center gap-2">
          <button className="text-gray-400 hover:text-white">
            <Shuffle className="w-4 h-4" />
          </button>
          <button className="text-gray-400 hover:text-white">
            <SkipBack className="w-4 h-4" />
          </button>
          <button className="bg-white rounded-full p-2">
            <Play className="w-4 h-4 text-red-950" fill="currentColor" />
          </button>
          <button className="text-gray-400 hover:text-white">
            <SkipForward className="w-4 h-4" />
          </button>
          <button className="text-gray-400 hover:text-white">
            <Repeat className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}