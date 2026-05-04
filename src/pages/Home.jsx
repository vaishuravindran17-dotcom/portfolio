import Opening from '../sections/Opening'
import Who from '../sections/Who'
import Experience from '../sections/Experience'
import Work from '../sections/Work'
import Play from '../sections/Play'
import VibeCoded from '../sections/VibeCoded'
import ArtTrials from '../sections/ArtTrials'
import Writing from '../sections/Writing'
import ThingsINotice from '../sections/ThingsINotice'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Opening />
      <Who />
      <Experience />
      <Work />
      <Play />
      <VibeCoded />
      <ArtTrials />
      <Writing />
      <ThingsINotice />
      <Footer />
    </main>
  )
}
