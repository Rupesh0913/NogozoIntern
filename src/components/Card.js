import React from 'react';

import './Cards.css'

export default function Cards({ classNumber , classInText}) {
  return (
    <>
    <div className="cardList">
        <div className="cardsHolder">
         <div className="cardImg">
            <h1>{classNumber}</h1>
          </div>
          <div className="cardText">
            <h6>{classInText}</h6>
          </div>
        </div>
      </div>  
    </>
  );
}
