import Opening from '../sections/Opening'
import Experience from '../sections/Experience'
import Work from '../sections/Work'
import VibeCoded from '../sections/VibeCoded'
import Play from '../sections/Play'
import ArtTrials from '../sections/ArtTrials'
import Writing from '../sections/Writing'
import ThingsINotice from '../sections/ThingsINotice'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Opening />
      <Experience />
      <Work />
      <VibeCoded />
      <Play />
      <ArtTrials />
      <Writing />
      <ThingsINotice />
      <Footer />
    </main>
  )
}
