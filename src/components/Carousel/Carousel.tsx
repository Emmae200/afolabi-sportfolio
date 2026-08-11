import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import styles from './Carousel.module.css';

interface CarouselProps {
  images: string[];
}

export function Carousel({ images }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getSlideClass = (index: number) => {
    if (index === activeIndex) return styles.active;
    
    const prevIndex = (activeIndex - 1 + images.length) % images.length;
    const nextIndex = (activeIndex + 1) % images.length;

    if (index === prevIndex) return styles.prev;
    if (index === nextIndex) return styles.next;
    
    return styles.hidden;
  };

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carouselContainer}>
        {images.map((img, idx) => (
          <div 
            key={idx} 
            className={`${styles.slide} ${getSlideClass(idx)}`}
            onClick={() => setActiveIndex(idx)}
          >
            <div className={styles.imageWrapper}>
              <img src={img} alt={`UI Preview ${idx + 1}`} loading="lazy" />
            </div>
          </div>
        ))}
      </div>
      
      <button 
        className={`${styles.controlBtn} ${styles.leftBtn}`} 
        onClick={handlePrev}
        aria-label="Previous image"
      >
        <ArrowLeft size={24} />
      </button>
      <button 
        className={`${styles.controlBtn} ${styles.rightBtn}`} 
        onClick={handleNext}
        aria-label="Next image"
      >
        <ArrowRight size={24} />
      </button>
    </div>
  );
}
