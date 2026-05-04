import Opening from '../sections/Opening'
import Who from '../sections/Who'
import Experience from '../sections/Experience'
import Work from '../sections/Work'
import Play from '../sections/Play'
import ArtTrials from '../sections/ArtTrials'
import VibeCoded from '../sections/VibeCoded'
import ThingsINotice from '../sections/ThingsINotice'
import Writing from '../sections/Writing'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Opening />
      <Who />
      <Experience />
      <Work />
      <Play />
      <ArtTrials />
      <VibeCoded />
      <ThingsINotice />
      <Writing />
      <Footer />
    </main>
  )
}
