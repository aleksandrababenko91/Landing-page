import SocialIcons from "../SocialIcons/SocialIcons";
import styles from './footer.module.scss';
import { v4 as uuidv4 } from 'uuid';
import {items} from './items';
import '../../app/styles/global.scss'
import Menu from "../Menu/Menu";

export default function Footer () {

  return(
    <footer > 
      <div className={styles.footer}>
      
        <div className={styles.icon}>
          {items.map((item) => {
            return <SocialIcons key={uuidv4()}  item={item}/>
          })}
        </div>
      </div>
    </footer>
  )
}