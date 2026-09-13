import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import FieldPage from './pages/FieldPage'
import SectionPage from './pages/SectionPage'
import ProjectPage from './pages/ProjectPage'
import About from './pages/About'
import Resume from './pages/Resume'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="rocketry" element={<FieldPage field="rocketry" />} />
        <Route path="drones" element={<FieldPage field="drones" />} />
        <Route path=":field/:section" element={<SectionPage />} />
        <Route path="projects/:slug" element={<ProjectPage />} />
        <Route path="about" element={<About />} />
        <Route path="resume" element={<Resume />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
