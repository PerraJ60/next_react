import Link from 'next/link';
import styles from '../../styles/Home.module.css';

function Nav() {
  return (
    <nav>
      <ul className={styles.header}>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/Products'>Products</Link>
        </li>
        <li>
          <Link href='/Continents'>Continents</Link>
        </li>
        <li>
          <Link href='/Spacex'>Space travels</Link>
        </li>
        <li>
          <Link href='/About'>CV</Link>
        </li>
        <li>
          <Link href='/Contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
