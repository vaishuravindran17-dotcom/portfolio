import { Routes, Route } from 'react-router-dom'
import { useTheme } from './context/ThemeContext'
import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Toggle from './components/Toggle'
import ReadingProgress from './components/ReadingProgress'
import ScrollToast from './components/ScrollToast'
import DesignSpecTooltip from './components/DesignSpecTooltip'
import Home from './pages/Home'
import ProjectPage from './pages/ProjectPage'
import PlayPage from './pages/PlayPage'

export default function App() {
  const { isFeeling } = useTheme()

  return (
    <>
      <Cursor />
      <Nav />
      <Toggle />
      <ReadingProgress />
      <ScrollToast />
      {!isFeeling && <div className="thinking-grid" aria-hidden="true" />}
      {!isFeeling && <DesignSpecTooltip />}
      <Routes>
        <Route path="/"            element={<Home />} />
        <Route path="/work/:slug"  element={<ProjectPage />} />
        <Route path="/play"        element={<PlayPage />} />
      </Routes>
    </>
  )
}
