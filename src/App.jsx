import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import LoadingScreen from './components/LoadingScreen.jsx'
import Home from './pages/Home.jsx'
import Infos from './pages/Infos.jsx'

export default function App() {
  // Intro plays once per browser session, not on every refresh.
  const [ready, setReady] = useState(() => {
    try { return sessionStorage.getItem('introSeen') === '1' } catch { return false }
  })
  const finishIntro = () => {
    try { sessionStorage.setItem('introSeen', '1') } catch { /* storage blocked */ }
    setReady(true)
  }

  return (
    <>
      {!ready && <LoadingScreen onDone={finishIntro} />}
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="infos" element={<Infos />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
