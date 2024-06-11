import styles from './tickerCard.module.scss'

export default function TickerCard ({item}) {
  const {img, title, width, height} = item;

  return (
    <div className={styles.card}>
      <img
      src={img}
      width={width}
      height={height}
      alt={title}
      />
    </div>
  )
}