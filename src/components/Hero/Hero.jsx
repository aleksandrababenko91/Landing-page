import TickerCard from '../TickerCard/TickerCard';
import styles from './Hero.module.scss';
import { items } from "./items";
import { v4 as uuidv4 } from 'uuid';
import Marquee from 'react-fast-marquee';
import card from '../../../public/images/card.png';
import Image from 'next/image';

export default function Hero () {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard 
      </div>
      <div className={styles.posterWrapper}>
        <Image  alt="poster" className={styles.poster} src={card} fillsizes="100%"/> 
      </div>

        <Marquee  className={styles.marquee} speed={60} gradient={false}>
          <div className={styles.logoContainer}>
            {items.map((item) => (
              <div key={uuidv4()}>
                  <TickerCard item={item}/>
              </div>
            ))}
          </div>
        </Marquee>

    </section>
  )
}