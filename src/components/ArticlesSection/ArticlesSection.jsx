"use client";

import styles from './ArticlesSection.module.scss';
import {items} from './items';
import ArticlesCard from './ArticlesCard/ArticlesCard';

export default function ArticlesSection() {
  return(
    <section className={styles.container}>
      <div className={styles.articleContainer}>
        {items.map((item, index) => 
          <div key={index}>
        <ArticlesCard  item={item}/>
          </div>
        )}
      </div>
    </section>
  )
}