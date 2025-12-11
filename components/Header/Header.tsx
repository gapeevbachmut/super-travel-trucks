'use client';

import css from './Header.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  // const router = useRouter(); // Отримуємо об'єкт маршрутизатора
  const currentPath = usePathname(); // Отримуємо поточний шлях сторінки

  // Визначаємо шляхи
  const homePath = '/';
  const catalogPath = '/catalog';
  return (
    <header className={css.header}>
      <div className={css.logo}>
        <Link href="/">
          <svg className={css.logo} width={136} height={16}>
            <use href="/mainPage/logo.svg"></use>
          </svg>
        </Link>
      </div>

      <nav className={css.headerNav}>
        <ul className={css.navigation}>
          <li className={css.navigationHome}>
            <Link
              href={homePath}
              className={currentPath === homePath ? css.activeLink : ''}
            >
              Home
            </Link>
          </li>
          <li className={css.navigationCatalog}>
            <Link
              href={catalogPath}
              className={currentPath === catalogPath ? css.activeLink : ''}
            >
              Catalog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
