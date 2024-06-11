
import Menu from './Menu/Menu';
import styles from './header.module.scss'

export default function Header () {
  return(
    <header className={styles.header}>

        <Menu />

    </header>
  )
}