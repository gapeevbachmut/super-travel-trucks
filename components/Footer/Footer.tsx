import Link from 'next/link';
import css from './Footer.module.css';

const Footer = () => {
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
        {/* <p>© {new Date().getFullYear()} All rights reserved.</p> */}
        <p>© 2025 All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
