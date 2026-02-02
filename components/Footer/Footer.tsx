import Link from 'next/link';
import css from './Footer.module.css';

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <div className={css.wrap}>
          <p>
            Created by
            <Link href="https://github.com/gapeevbachmut" target="_blank">
              {' '}
              Hapieiev Andrii
            </Link>
          </p>
        </div>

        <p>
          <time dateTime="2025">2025</time> -{' '}
          <time dateTime={new Date().getFullYear().toString()}>{date}</time>{' '}
          Built with{' '}
          <span role="img" aria-label="love">
            <svg width={16} height={16} aria-hidden="true" focusable="false">
              <use href="/icons-2.svg#icon-heart-red"></use>
            </svg>
          </span>{' '}
          and shared for free.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
