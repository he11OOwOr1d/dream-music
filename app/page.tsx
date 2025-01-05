import { Sidebar } from '@/components/layout/sidebar'
import { Header } from '@/components/layout/header'
import { ArtistBanner } from '@/components/artist/artist-banner'
import { TrackList } from '@/components/tracks/track-list'
import { MiniPlayer } from '@/components/player/mini-player'

export default function Page() {
  return (
    <div className="bg-gradient-to-br from-black to-red-950 min-h-screen flex">
      <Sidebar />
      <main className="flex-1 ml-64 mr-72">
        <Header />
        <div className="p-8">
          <ArtistBanner />
          <TrackList />
        </div>
      </main>
      <div className="w-72 fixed right-0 top-0 h-screen p-4" style={{ backgroundColor: '#1a0b0b' }}>
        <MiniPlayer />
      </div>
    </div>
  )
}