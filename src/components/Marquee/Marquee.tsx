import styles from './Marquee.module.css';

interface MarqueeProps {
  items: string[];
}

export function Marquee({ items }: MarqueeProps) {
  // Duplicate the array to create a seamless infinite scroll
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeContent}>
        {duplicatedItems.map((item, index) => (
          <div key={index} className={styles.marqueeItem}>
            <span>{item}</span>
            <span className={styles.separator}>•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
