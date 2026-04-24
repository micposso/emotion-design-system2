import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import DownloadButton from './components/atoms/download-button/DownloadButton'
import Button from './components/atoms/button/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <section style={{ marginTop: '2rem' }}>
          <h2>Button Variants</h2>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="disabled" disabled>Disabled</Button>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
