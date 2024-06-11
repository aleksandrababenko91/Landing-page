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
      <h3>Venture capital investors for the next generation.
          We’re here to do things differently.
      </h3>
      <Image  src={card} width={1000} height={300}/> 
      <Marquee speed={60} gradient={false}>
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