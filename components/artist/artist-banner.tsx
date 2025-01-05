import { BadgeCheck } from 'lucide-react'
import Image from 'next/image'

export function ArtistBanner() {
  return (
    <div className="relative rounded-3xl overflow-hidden mb-8">
      <Image
        src="/michael-jackson.jpg"
        alt="Michael Jackson performing"
        width={1200}
        height={400}
        className="w-full h-[400px] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute bottom-8 left-8">
        <div className="flex items-center gap-2 mb-2">
          <BadgeCheck className="w-5 h-5 text-blue-400" />
          <span className="text-gray-300">Verified Artist</span>
        </div>
        <h1 className="text-4xl font-bold text-white mb-2">Michael Jackson</h1>
        <p className="text-gray-300">27,852,501 monthly listeners</p>
      </div>
    </div>
  )
}