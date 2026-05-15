import Typography from '../components/atoms/typography/Typography'
import Divider from '../components/atoms/divider/Divider'
import Badge from '../components/atoms/badge/Badge'
import SiteNav from '../components/organisms/site-nav/SiteNav'
import './DocsPage.css'

const SECTIONS = [
  {
    title: 'Getting Started',
    content: 'Clone the repo, run npm install, then npm run dev. All tokens live in src/styles/tokens.css — that is your single source of truth.',
  },
  {
    title: 'Design Tokens',
    content: 'Every color, spacing value, radius, shadow, and font is expressed as a CSS custom property. No raw values permitted in components. If a token does not exist, add it to tokens.css first.',
  },
  {
    title: 'Atomic Structure',
    content: 'Components follow the Atomic Design methodology. Atoms are indivisible primitives (Button, Badge, Input). Molecules compose atoms (Card). Organisms compose molecules and atoms into full UI sections (Header, Form, DataTable).',
  },
  {
    title: 'BEM Naming',
    content: 'CSS classes use Block__Element--Modifier syntax. Atoms are prefixed a-, molecules m-, organisms o-. Design system layout utilities use ds-.',
  },
  {
    title: 'Typography Scale',
    content: 'Font sizes use rem units only. The scale: xs (0.75rem), sm (0.875rem), md (1rem), lg (1.25rem), xl (2rem), display (2.5rem). No px for type — ever.',
  },
  {
    title: 'Spacing System',
    content: 'Spacing is based on an 8px grid: --space-xs (8px), --space-sm (16px), --space-md (24px), --space-lg (32px). Component padding uses dedicated --padding-btn-* tokens for consistent button sizing.',
  },
]

export default function DocsPage() {
  return (
    <div className="docs-page">
      <header className="ds-page-header">
        <div className="ds-page-header__title-row">
          <Typography as="h1" variant="h1">Documentation</Typography>
          <SiteNav />
        </div>
        <Typography as="p" variant="body-sm" className="ds-page-header__desc">
          Architecture decisions, token conventions, and component guidelines for the Emotion Design System.
        </Typography>
      </header>
      <div className="docs-page__grid">
        {SECTIONS.map((section, i) => (
          <article key={i} className="docs-page__card">
            <div className="docs-page__card-index">
              <Badge color="primary" size="sm">{String(i + 1).padStart(2, '0')}</Badge>
            </div>
            <Typography as="h2" variant="h3">{section.title}</Typography>
            <Divider variant="solid" />
            <Typography as="p" variant="body">{section.content}</Typography>
          </article>
        ))}
      </div>
      <a
        href="https://github.com/micposso/emotion-design-system2"
        target="_blank"
        rel="noopener noreferrer"
        className="docs-page__github-link"
      >
        <svg className="docs-page__github-icon" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.57 9.57 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
        View on GitHub
      </a>
    </div>
  )
}
