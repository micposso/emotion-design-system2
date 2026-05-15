import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
const AVATAR_IMG = 'https://plus.unsplash.com/premium_photo-1720601645664-98b6b06efeca?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
import './App.css'
import './styles/tokens.css';

import Button from './components/atoms/button/Button';
import Input from './components/atoms/input/Input';
import Label from './components/atoms/label/Label';
import Checkbox from './components/atoms/checkbox/Checkbox';
import Radio from './components/atoms/radio/Radio';
import Switch from './components/atoms/switch/Switch';
import Icon from './components/atoms/icon/Icon';
import Avatar from './components/atoms/avatar/Avatar';
import Badge from './components/atoms/badge/Badge';
import Divider from './components/atoms/divider/Divider';
import Typography from './components/atoms/typography/Typography';
import Loader from './components/atoms/loader/Loader';
import Card from './components/molecules/card/Card';
import Header from './components/organisms/header/Header';
import Footer from './components/organisms/footer/Footer';
import Sidebar from './components/organisms/sidebar/Sidebar';
import DataTable from './components/organisms/data-table/DataTable';
import Form from './components/organisms/form/Form';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className="ds-page">
        <div className="ds-container">
          <header className="ds-page-header">
            <Typography as="h1" variant="h1">Emotion Design System</Typography>
            <Typography as="p" variant="body-sm">V1.0</Typography>
            <Typography as="p" variant="body-sm" className="ds-page-header__desc">
              A React + TypeScript component system built on atomic design principles — tokens, BEM, and zero magic numbers.
            </Typography>
          </header>
        {/* ATOMS */}
        <section className="ds-section">
          <Typography as="h2" variant="h2">Atoms</Typography>
          <div className="ds-atom-grid">
            <div className="ds-atom-demo ds-atom-demo--wide">
              <Typography as="h3" variant="h4">Button</Typography>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-xs)', alignItems: 'center' }}>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
                <Button variant="disabled" disabled>Disabled</Button>
              </div>
              <Typography as="p" variant="caption">Sizes</Typography>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-xs)', alignItems: 'center' }}>
                <Button variant="primary" size="sm">Small</Button>
                <Button variant="primary" size="md">Medium</Button>
                <Button variant="primary" size="lg">Large</Button>
              </div>
            </div>
            <div className="ds-atom-demo">
              <Typography as="h3" variant="h4">Input</Typography>
              <Input label="Label" placeholder="Type here..." />
            </div>
            <div className="ds-atom-demo">
              <Typography as="h3" variant="h4">Label</Typography>
              <Label>Example Label</Label>
            </div>
            <div className="ds-atom-demo">
              <Typography as="h3" variant="h4">Checkbox</Typography>
              <Checkbox label="Accept terms" />
            </div>
            <div className="ds-atom-demo">
              <Typography as="h3" variant="h4">Radio</Typography>
              <Radio label="Option A" name="radio-demo" />
              <Radio label="Option B" name="radio-demo" />
            </div>
            <div className="ds-atom-demo">
              <Typography as="h3" variant="h4">Switch</Typography>
              <Switch label="Enable feature" />
            </div>
            <div className="ds-atom-demo">
              <Typography as="h3" variant="h4">Avatar</Typography>
              <div style={{ display: 'flex', gap: 'var(--space-sm)', alignItems: 'center' }}>
                <Avatar src={AVATAR_IMG} size="sm" />
                <Avatar src={AVATAR_IMG} size="md" />
                <Avatar src={AVATAR_IMG} size="lg" />
              </div>
            </div>
            <div className="ds-atom-demo ds-atom-demo--wide">
              <Typography as="h3" variant="h4">Badge</Typography>
              <Typography as="p" variant="caption">Variants</Typography>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-xs)', alignItems: 'center' }}>
                <Badge color="primary">Primary</Badge>
                <Badge color="secondary">Secondary</Badge>
                <Badge color="success">Success</Badge>
                <Badge color="danger">Danger</Badge>
                <Badge color="warning">Warning</Badge>
                <Badge color="outline">Outline</Badge>
                <Badge color="ghost">Ghost</Badge>
              </div>
              <Typography as="p" variant="caption">With dot indicator</Typography>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-xs)', alignItems: 'center' }}>
                <Badge color="primary" dot>Active</Badge>
                <Badge color="success" dot>Online</Badge>
                <Badge color="danger" dot>Offline</Badge>
                <Badge color="warning" dot>Away</Badge>
              </div>
              <Typography as="p" variant="caption">Sizes</Typography>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-xs)', alignItems: 'center' }}>
                <Badge color="primary" size="sm">Small</Badge>
                <Badge color="primary" size="md">Medium</Badge>
                <Badge color="primary" size="lg">Large</Badge>
              </div>
            </div>
            <div className="ds-atom-demo ds-atom-demo--wide">
              <Typography as="h3" variant="h4">Divider</Typography>
              <Typography as="p" variant="caption">Solid</Typography>
              <Divider variant="solid" />
              <Typography as="p" variant="caption">Dashed</Typography>
              <Divider variant="dashed" />
              <Typography as="p" variant="caption">Dotted</Typography>
              <Divider variant="dotted" />
              <Typography as="p" variant="caption">Thick</Typography>
              <Divider variant="thick" />
              <Typography as="p" variant="caption">With label</Typography>
              <Divider label="or continue with" />
            </div>
            <div className="ds-atom-demo ds-atom-demo--wide">
              <Typography as="h3" variant="h4">Loader</Typography>
              <Typography as="p" variant="caption">Colors</Typography>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-md)', alignItems: 'center' }}>
                <Loader color="primary" />
                <Loader color="success" />
                <Loader color="danger" />
                <Loader color="warning" />
                <Loader color="muted" />
              </div>
              <Typography as="p" variant="caption">Sizes</Typography>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-md)', alignItems: 'center' }}>
                <Loader color="primary" size="sm" label="Small loader" />
                <Loader color="primary" size="md" label="Medium loader" />
                <Loader color="primary" size="lg" label="Large loader" />
              </div>
            </div>
            <div className="ds-atom-demo ds-atom-demo--wide">
              <Typography as="h3" variant="h4">Typography</Typography>
              <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap' }}>
                <div style={{ flex: '1 1 0', minWidth: '160px', padding: 'var(--space-sm)', background: 'var(--color-bg-main)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                  <Typography as="h1" variant="h1">Heading 1</Typography>
                  <Typography as="h2" variant="h2">Heading 2</Typography>
                  <Typography as="h3" variant="h3">Heading 3</Typography>
                  <Typography as="h4" variant="h4">Heading 4</Typography>
                </div>
                <div style={{ flex: '1 1 0', minWidth: '160px', padding: 'var(--space-sm)', background: 'var(--color-bg-main)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
                  <Typography as="span" variant="overline">Body Small</Typography>
                  <Typography as="p" variant="body-sm">The quick brown fox jumps over the lazy dog. Small body text at 14px, great for secondary content.</Typography>
                </div>
                <div style={{ flex: '1 1 0', minWidth: '160px', padding: 'var(--space-sm)', background: 'var(--color-bg-main)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
                  <Typography as="span" variant="overline">Body Medium</Typography>
                  <Typography as="p" variant="body">The quick brown fox jumps over the lazy dog. Standard body text at 16px, the default reading size.</Typography>
                </div>
                <div style={{ flex: '1 1 0', minWidth: '160px', padding: 'var(--space-sm)', background: 'var(--color-bg-main)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
                  <Typography as="span" variant="overline">Body Large</Typography>
                  <Typography as="p" variant="body-lg">The quick brown fox jumps over the lazy dog. Large body text at 20px for introductions.</Typography>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap', marginTop: 'var(--space-xs)' }}>
                <Typography as="span" variant="caption">Caption text</Typography>
                <Typography as="span" variant="overline">Overline label</Typography>
              </div>
            </div>
          </div>
        </section>

        {/* MOLECULES */}
        <section className="ds-section">
          <Typography as="h2" variant="h2">Molecules</Typography>
          <div className="ds-molecule-list">

            <div className="ds-molecule-demo">
              <Typography as="h3" variant="h4">Horizontal Card (default)</Typography>
              <Card layout="horizontal" showActions={false} />
            </div>

            <div className="ds-molecule-demo">
              <Typography as="h3" variant="h4">Vertical Card</Typography>
              <Card layout="vertical" />
            </div>

            <div className="ds-molecule-demo">
              <Typography as="h3" variant="h4">Card with Badge &amp; Meta</Typography>
              <Card layout="vertical" badge="New" meta="May 2026" title="Featured Article" text="A thoughtfully typeset card with a badge and meta label above the title." />
            </div>

            <div className="ds-molecule-demo">
              <Typography as="h3" variant="h4">Text + Actions (no image)</Typography>
              <Card showImage={false} layout="vertical" title="Simple Card" text="No image here — just clean typography and actions for a streamlined layout." />
            </div>

            <div className="ds-molecule-demo">
              <Typography as="h3" variant="h4">Text Only (no image, no actions)</Typography>
              <Card showImage={false} showActions={false} layout="vertical" title="Read-only Card" text="A purely informational card. No interactivity, no distractions — just content." />
            </div>

            <div className="ds-molecule-demo">
              <Typography as="h3" variant="h4">Stat Card</Typography>
              <Card
                showImage={false}
                showActions={false}
                layout="vertical"
                badge="Live"
                title="Monthly Visitors"
                text="Up 14% from last month"
                stat={{ value: '84,210', label: 'unique visitors' }}
              />
            </div>

            <div className="ds-molecule-demo">
              <Typography as="h3" variant="h4">Card with Footer</Typography>
              <Card
                layout="vertical"
                showImage={false}
                title="Team Update"
                text="Design system sprint review is scheduled for Friday at 2pm."
                footer={<><span>Posted by Jane Doe</span><span>2 hours ago</span></>}
              />
            </div>

          </div>
        </section>

        {/* ORGANISMS */}
        <section className="ds-section">
          <Typography as="h2" variant="h2">Organisms</Typography>

          <div className="ds-organism-demo">
            <Typography as="h3" variant="h4">Header</Typography>
            <Header logo="DesignSystem" notificationCount={3} />
          </div>

          <div className="ds-organism-demo">
            <Typography as="h3" variant="h4">Sidebar</Typography>
            <Sidebar />
          </div>

          <div className="ds-organism-demo">
            <Typography as="h3" variant="h4">Data Table</Typography>
            <DataTable
              caption="Team Members"
              columns={[
                { key: 'name', label: 'Name' },
                { key: 'role', label: 'Role' },
                { key: 'status', label: 'Status', render: (val) => <Badge color={val === 'Active' ? 'success' : 'secondary'}>{String(val)}</Badge> },
              ]}
              rows={[
                { name: 'Jane Doe', role: 'Designer', status: 'Active' },
                { name: 'John Smith', role: 'Engineer', status: 'Active' },
                { name: 'Emily Chen', role: 'Product Manager', status: 'Away' },
              ]}
            />
          </div>

          <div className="ds-organism-demo">
            <Typography as="h3" variant="h4">Form</Typography>
            <Form title="Contact Us" />
          </div>

          <div className="ds-organism-demo">
            <Typography as="h3" variant="h4">Footer</Typography>
            <Footer />
          </div>
        </section>
        </div>
      </main>
    </>
  )
}

export default App
