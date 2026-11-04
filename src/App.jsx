import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import LoadingScreen from './components/LoadingScreen.jsx'
import Home from './pages/Home.jsx'
import Infos from './pages/Infos.jsx'

export default function App() {
  // Intro plays on every page load — refresh = re-play.
  const [ready, setReady] = useState(false)

  return (
    <>
      {!ready && <LoadingScreen onDone={() => setReady(true)} />}
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
