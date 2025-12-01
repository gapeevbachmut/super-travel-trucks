import css from "./Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={css.header}>
      <h2>TravelTrucks</h2>
      <nav>
        <ul className={css.navigation}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/catalog">Catalog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
