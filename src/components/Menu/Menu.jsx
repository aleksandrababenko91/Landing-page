import styles from './menu.module.scss';
import Links from '@/components/Links/Links';
import { navLinks } from './items';
import { v4 as uuidv4 } from 'uuid';

export default function Menu () {
  return(
    <div className={styles.menu}>
      <div className={styles.links}>
        {navLinks.map(({url, name}) => (
          <div   key={uuidv4()}> 
            <Links  url={url} >{name}</Links>
          </div>
        ))}
      </div>
    </div>
  )
}