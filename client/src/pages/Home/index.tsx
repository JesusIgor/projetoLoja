import React from 'react';
import { useProducts } from '../../Context/ProductsContext';
import ProductsGrid from '../../Components/productGrid';
import { Container } from './style';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import LaunchesSection from '../../Components/Launches'; 

const banners = [
  '/banner2.png',
  '/banner1.png',
  '/banner3.png',
];


const Home: React.FC = () => {



  return (
    <Container>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        interval={2000}
      >
        {banners.map((banner, index) => (
          <div key={index}>
            <img src={banner} alt={`Banner ${index + 1}`} />
          </div>
        ))}
      </Carousel>
      <LaunchesSection></LaunchesSection>
    </Container>
  );
};

export default Home;