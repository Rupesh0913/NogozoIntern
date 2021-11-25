import React from 'react';
import {
    Carousel
} from 'react-bootstrap';

export default function TopCarousel() {
  return (
    <>
 <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010__340.jpg"
      alt="First slide"
      height="500vh"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2016/06/01/06/26/open-book-1428428__340.jpg"
      alt="Second slide"
      height="500vh"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2021/01/21/15/54/books-5937716__340.jpg"
      alt="Third slide"
      height="500vh"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
   
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </>
  );
}
