import React from 'react';
import Cards from '../components/Card';
import {homeObjOne,
        homeObjTwo, 
        homeObjThree,
        homeObjFour,
        homeObjFive,
        homeObjSix,
        homeObjSeven,
        homeObjEight,
        homeObjNine,
        homeObjTen} from './Data'
import "./Home.css"

export default function Home() {
  return (
    <>
        <div className="CardSection">
         <Cards {...homeObjOne}/>
         <Cards {...homeObjTwo}/>
         <Cards {...homeObjThree}/>
         <Cards {...homeObjFour}/>
         <Cards {...homeObjFive}/>
         <Cards {...homeObjSix}/>
         <Cards {...homeObjSeven}/>
         <Cards {...homeObjEight}/>
         <Cards {...homeObjNine}/>
         <Cards {...homeObjTen}/>
        </div>
    </>
  );
}
