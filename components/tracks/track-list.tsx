import { Play } from 'lucide-react'
import Image from 'next/image'

interface Track {
  id: number
  title: string
  plays: number
  duration: string
  album: string
  albumArt: string
}

const tracks: Track[] = [
  {
    id: 1,
    title: "Billie Jean",
    plays: 1040811084,
    duration: "4:53",
    album: "Thriller 25 Sup...",
    albumArt: "/michael-jackson.jpg"
  },
  {
    id: 2,
    title: "Beat It",
    plays: 643786045,
    duration: "4:18",
    album: "Thriller 25 Sup...",
    albumArt: "/michael-jackson.jpg"
  },
  {
    id: 3,
    title: "Smooth Criminal - 2012 Remaster",
    plays: 407234004,
    duration: "4:17",
    album: "Thriller 25 Sup...",
    albumArt: "/michael-jackson.jpg"
  },
  {
    id: 4,
    title: "Don't Stop 'Til You Get Enough",
    plays: 316391952,
    duration: "6:05",
    album: "Bad 25th Anni...",
    albumArt: "/michael-jackson.jpg"
  },
  {
    id: 5,
    title: "Rock With You - Single Version",
    plays: 268187218,
    duration: "3:40",
    album: "Off The Wall",
    albumArt: "/michael-jackson.jpg"
  }
]

export function TrackList() {
  return (
    <div className="px-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Popular</h2>
        <button className="text-gray-400 hover:text-white">See All</button>
      </div>
      
      <table className="w-full table-fixed">
        <thead>
          <tr className="text-gray-400 text-left">
            <th className="pb-4 w-12">#</th>
            <th className="pb-4 w-[40%]">TITLE</th>
            <th className="pb-4 w-[25%]">PLAYING</th>
            <th className="pb-4 w-[15%]">TIME</th>
            <th className="pb-4 w-[20%]">ALBUM</th>
          </tr>
        </thead>
        <tbody>
          {tracks.map((track) => (
            <tr 
              key={track.id} 
              className={`group hover:bg-white/5 ${track.id === 2 ? 'bg-red-950/50' : ''}`}
            >
              <td className="py-3 text-gray-400">{track.id}</td>
              <td>
                <div className="flex items-center gap-3">
                  <Image
                    src={track.albumArt}
                    alt={track.title}
                    width={40}
                    height={40}
                    className="rounded shrink-0"
                  />
                  <span className="text-white truncate">{track.title}</span>
                </div>
              </td>
              <td className="text-gray-400 truncate">
                {track.plays.toLocaleString()}
              </td>
              <td className="text-gray-400">{track.duration}</td>
              <td className="text-gray-400 truncate">{track.album}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}