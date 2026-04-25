import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import DownloadButton from './components/atoms/download-button/DownloadButton'
import Button from './components/atoms/button/Button'
import Card from './components/molecules/card/Card'

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

        <section style={{ marginTop: '2rem' }}>
          <h2>Card Examples</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <h3>Default (image + actions)</h3>
              <Card />
            </div>

            <div>
              <h3>No image (text + actions)</h3>
              <Card showImage={false} />
            </div>

            <div>
              <h3>Text only (no image, no actions)</h3>
              <Card showImage={false} showActions={false} title="Text-only card" text="This card contains only text for simple notices or summaries." />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
