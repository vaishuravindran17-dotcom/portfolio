import { Routes, Route } from 'react-router-dom'
import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Toggle from './components/Toggle'
import ReadingProgress from './components/ReadingProgress'
import ScrollToast from './components/ScrollToast'
import Home from './pages/Home'
import ProjectPage from './pages/ProjectPage'

export default function App() {
  return (
    <>
      <Cursor />
      <Nav />
      <Toggle />
      <ReadingProgress />
      <ScrollToast />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:slug" element={<ProjectPage />} />
      </Routes>
    </>
  )
}
