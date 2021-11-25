import React from 'react';
import FeaturedCard from './FeaturedCard';
import {
    NovelOne,
    NovelTwo,
    NovelThree,
    NovelFour
} from './NovelsData';
import './index.css'

export default function Novel() {
  return (
    <>
        <div className="heading">
        <h1>Featured Novels</h1>
        </div>
        <div className="NovelContainer">
            <FeaturedCard {...NovelOne}/>
            <FeaturedCard {...NovelTwo}/>
            <FeaturedCard {...NovelThree}/>
            <FeaturedCard {...NovelFour}/>
        </div>

        <div className="heading">
        <h1>Term 1 Exam 2021</h1>
        </div>
        <div className="NovelContainer">
            <FeaturedCard {...NovelOne}/>
            <FeaturedCard {...NovelTwo}/>
            <FeaturedCard {...NovelThree}/>
            <FeaturedCard {...NovelFour}/>
        </div>

        <div className="heading">
        <h1>ISC Board Best Picks</h1>
        </div>
        <div className="NovelContainer">
            <FeaturedCard {...NovelOne}/>
            <FeaturedCard {...NovelTwo}/>
            <FeaturedCard {...NovelThree}/>
            <FeaturedCard {...NovelFour}/>
        </div>
    </>
  );
}
