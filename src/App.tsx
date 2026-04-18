import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import DownloadButton from './components/atoms/download-button/DownloadButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <h1>Example Download</h1>
        <DownloadButton label="Download PDF" href="/assets/hero.png" filename="hero.png" />
      </main>
    </>
  )
}

export default App
