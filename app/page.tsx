import css from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <section className={css.homeContainer}>
      <div className={css.home}>
        <h1 className={css.homeTitle}>Campers of your dreams</h1>
        <p className={css.homeText}>
          You can find everything you want in our catalog
        </p>
        <button type="button" className={css.homeBtn}>
          <Link href="/catalog" className={css.homeBtnText}>
            View Now
          </Link>
        </button>
      </div>
    </section>
  );
}
