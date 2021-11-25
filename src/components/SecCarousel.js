import React from 'react';
import {
    Carousel
} from 'react-bootstrap';

import './secCarousel.css'

export default function SecCarousel() {
  return (
    <>
        <div className="carouselContainer">
            <div className="carouselHeading">
                <h1>Novels For You</h1>
            </div>
            <div className="carouselSection">
                <Carousel fade>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 customImg"
                        src="https://cdn.pixabay.com/photo/2016/09/10/17/18/book-1659717__340.jpg"
                        alt="First slide"
                        height="500vh"

                        />
                        <Carousel.Caption>
                        <h3>Fantasy Novel</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 customImg"
                        src="https://cdn.pixabay.com/photo/2017/01/03/19/55/book-1950451__340.jpg"
                        alt="Second slide"
                        height="500vh"
                        />

                        <Carousel.Caption>
                        <h3>Romance Novels</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 customImg"
                        src="https://cdn.pixabay.com/photo/2015/05/15/22/42/book-769360__340.jpg"
                        alt="Third slide"
                        height="500vh"
                        />

                        <Carousel.Caption>
                        <h3>Sci-Fi Novel</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    </>
  );
}
