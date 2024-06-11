import styles from './menu.module.scss';
import Links from '@/components/Links/Links';
import { navLinks1 } from './items1';
import { navLinks2 } from './items2';
import { v4 as uuidv4 } from 'uuid';

export default function Menu () {
  return(
    <div className={styles.menu}>
      <div className={styles.links}>
        {navLinks1.map(({url, name}) => (
          <div   key={uuidv4()}> 
            <Links  url={url} >{name}</Links>
          </div>
        ))}
      </div>
      <div className={styles.logoName}>
        Good Landing Page
      </div>
      <div className={styles.links}>
        {navLinks2.map(({url, name}) => (
          <div  key={uuidv4()}> 
            <Links  url={url} >{name}</Links>
          </div>
        ))}
      </div>
    </div>
  )
}