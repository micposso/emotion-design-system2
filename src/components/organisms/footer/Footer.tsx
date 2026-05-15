import React from 'react';
import Divider from '../../atoms/divider/Divider';
import Typography from '../../atoms/typography/Typography';
import './Footer.css';

type FooterLink = {
  label: string;
  href: string;
};

type FooterColumn = {
  heading: string;
  links: FooterLink[];
};

type Props = {
  columns?: FooterColumn[];
  copyright?: string;
};

const defaultColumns: FooterColumn[] = [
  {
    heading: 'Components',
    links: [
      { label: 'Atoms', href: '#' },
      { label: 'Molecules', href: '#' },
      { label: 'Organisms', href: '#' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Documentation', href: '#' },
      { label: 'Changelog', href: '#' },
      { label: 'GitHub', href: '#' },
    ],
  },
  {
    heading: 'Support',
    links: [
      { label: 'Community', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
];

export default function Footer({
  columns = defaultColumns,
  copyright = `© ${new Date().getFullYear()} Design System. All rights reserved.`,
}: Props) {
  return (
    <footer className="o-footer">
      <div className="o-footer__columns">
        {columns.map((col) => (
          <div key={col.heading} className="o-footer__column">
            <Typography as="h4" variant="h5" className="o-footer__heading">{col.heading}</Typography>
            <ul className="o-footer__list">
              {col.links.map((link) => (
                <li key={link.label} className="o-footer__item">
                  <a href={link.href} className="o-footer__link">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Divider />
      <div className="o-footer__bottom">
        <Typography as="span" variant="caption" className="o-footer__copyright">{copyright}</Typography>
      </div>
    </footer>
  );
}
