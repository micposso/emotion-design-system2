import Typography from '../components/atoms/typography/Typography'
import Badge from '../components/atoms/badge/Badge'
import Divider from '../components/atoms/divider/Divider'
import SiteNav from '../components/organisms/site-nav/SiteNav'
import './ReleasesPage.css'

const RELEASES = [
  {
    version: 'V1.0.0',
    date: 'May 14, 2026',
    status: 'Latest',
    changes: [
      'Initial release of the Emotion Design System',
      '12 Atom components: Button, Input, Label, Checkbox, Radio, Switch, Avatar, Badge, Divider, Loader, Typography, Icon',
      '7 Molecule variants: Card (horizontal, vertical, stat, badge, footer, text-only, image)',
      '5 Organism components: Header, Sidebar, DataTable, Form, Footer',
      'Full design token system in tokens.css — colors, spacing, radii, shadows, typography',
      'BEM naming convention with atomic prefixes (a-, m-, o-)',
      'Dot-grid background texture with fixed attachment',
      'React Router navigation with Documentation and Releases pages',
    ],
  },
  {
    version: 'V0.9.0',
    date: 'May 7, 2026',
    status: 'Beta',
    changes: [
      'Core token system established',
      'Button, Input, Label, Checkbox, Radio, Switch atoms',
      'Card molecule with horizontal and vertical layouts',
      'Initial Header and Footer organisms',
    ],
  },
  {
    version: 'V0.5.0',
    date: 'April 28, 2026',
    status: 'Alpha',
    changes: [
      'Project scaffold with Vite + React + TypeScript',
      'Atomic directory structure created',
      'Plus Jakarta Sans loaded via Google Fonts',
      'Base token file with color and spacing primitives',
    ],
  },
]

const STATUS_COLOR: Record<string, 'success' | 'warning' | 'secondary'> = {
  Latest: 'success',
  Beta: 'warning',
  Alpha: 'secondary',
}

export default function ReleasesPage() {
  return (
    <div className="releases-page">
      <header className="ds-page-header">
        <div className="ds-page-header__title-row">
          <Typography as="h1" variant="h1">Releases</Typography>
          <SiteNav />
        </div>
        <Typography as="p" variant="body-sm" className="ds-page-header__desc">
          Version history and changelog for the Emotion Design System.
        </Typography>
      </header>
      <div className="releases-page__list">
        {RELEASES.map((release) => (
          <article key={release.version} className="releases-page__entry">
            <div className="releases-page__entry-header">
              <Typography as="h2" variant="h3">{release.version}</Typography>
              <Badge color={STATUS_COLOR[release.status]}>{release.status}</Badge>
              <Typography as="span" variant="caption">{release.date}</Typography>
            </div>
            <Divider variant="solid" />
            <ul className="releases-page__change-list">
              {release.changes.map((change, i) => (
                <li key={i}>
                  <Typography as="span" variant="body-sm">{change}</Typography>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  )
}
