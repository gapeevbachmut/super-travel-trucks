import css from "./Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.logo}></div>
      <Link href="/">
        <svg className={css.logo} width={136} height={16}>
          <use href="/mainPage/logo.svg"></use>
        </svg>
      </Link>
      <nav className={css.headerNav}>
        <ul className={css.navigation}>
          <li className={css.navigationHome}>
            <Link href="/">Home</Link>
          </li>
          <li className={css.navigationCatalog}>
            <Link href="/catalog">Catalog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
