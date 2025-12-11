'use client';

import css from './Header.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  // для кольору текста сторінки
  const currentPath = usePathname();
  const homePath = '/';
  const catalogPath = '/catalog';
  return (
    <header className={css.header}>
      <div className={css.headerLinks}>
        <div className={css.logo}>
          <Link href="/" className={css.link}>
            <svg width={136} height={16}>
              <use href="/mainPage/logo.svg"></use>
            </svg>
          </Link>
        </div>

        <nav className={css.headerNav}>
          <ul className={css.navigation}>
            <li className={css.navigationHome}>
              <Link
                href={homePath}
                className={`${css.link} ${currentPath === homePath ? css.activeLink : ''}`}
              >
                Home
              </Link>
            </li>
            <li className={css.navigationCatalog}>
              <Link
                href={catalogPath}
                className={`${css.link} ${currentPath === catalogPath ? css.activeLink : ''}`}
              >
                Catalog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
