import Opening from '../sections/Opening'
import Who from '../sections/Who'
import Work from '../sections/Work'
import Mentoring from '../sections/Mentoring'
import ArtTrials from '../sections/ArtTrials'
import VibeCoded from '../sections/VibeCoded'
import Play from '../sections/Play'
import ThingsINotice from '../sections/ThingsINotice'
import Writing from '../sections/Writing'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Opening />
      <Who />
      <Work />
      <Mentoring />
      <ArtTrials />
      <VibeCoded />
      <Play />
      <ThingsINotice />
      <Writing />
      <Footer />
    </main>
  )
}
