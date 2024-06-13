import styles from './socialicons.module.scss';

export default function SocialIcons ({item}) {
  const {image, name, url, text} = item;
  return(
    <div className={styles.links}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img 
        alt={name} 
        src={image} />
        {text}
      </a>
    </div>
  )
}