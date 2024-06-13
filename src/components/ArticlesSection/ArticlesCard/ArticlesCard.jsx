import Image from 'next/image';
import styles from './ArticlesCard.module.scss';

export default function ArticlesCard({item}) {

  const { img, title, header, desc} = item;
  return(
    <div className={styles.cardWrapper}>
      <div className={styles.img}>
        <Image
        fill
          sizes="100%"
        src={img}
        alt="article image"
       />
      <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.headerWrapper}>
          {header}
        </div>
        <div className={styles.descWrapper}>
          {desc}
        </div>
      </div>
    </div>

  )
}