import React, { useState } from 'react';
import { Grid, Image, Icon } from 'semantic-ui-react';
import styles from '../views/home/styles/Home.module.css';

const images = [
  { src: process.env.PUBLIC_URL + '/carousel2.jpg', alt: 'Barbershop interior view 1' },
  { src: process.env.PUBLIC_URL + '/carousel2.jpg', alt: 'Barber cutting a client\'s hair' },
  { src: process.env.PUBLIC_URL + '/carousel3.jpg', alt: 'Client getting a beard trim' },
  { src: process.env.PUBLIC_URL + '/carousel2.jpg', alt: 'Barbershop interior view 1' },
  { src: process.env.PUBLIC_URL + '/carousel2.jpg', alt: 'Barber cutting a client\'s hair' },
  { src: process.env.PUBLIC_URL + '/carousel3.jpg', alt: 'Client getting a beard trim' },
];

const CarouselSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? (images.length > 4 ? images.length - 4 : 0) : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSet = currentIndex >= images.length - 4;
    const newIndex = isLastSet ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const displayImages = [];
  for (let i = 0; i < 4; i++) {
    if (images[(currentIndex + i) % images.length]) {
      displayImages.push(images[(currentIndex + i) % images.length]);
    }
  }

  return (
    <div className={styles.carouselSection}>
      <Grid centered columns={5} verticalAlign='middle'>
        <Grid.Column width={1} textAlign='center' className={styles.carouselArrowColumn}>
          <Icon name='chevron left' size='huge' inverted onClick={goToPrevious} className={styles.carouselArrow} />
        </Grid.Column>
        {displayImages.map((image, index) => (
          <Grid.Column key={index} mobile={16} tablet={8} computer={3}>
            <Image src={image.src} alt={image.alt} className={styles.carouselImage} />
          </Grid.Column>
        ))}
        <Grid.Column width={1} textAlign='center' className={styles.carouselArrowColumn}>
          <Icon name='chevron right' size='huge' inverted onClick={goToNext} className={styles.carouselArrow} />
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default CarouselSection;
