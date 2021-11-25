import React from 'react'
import './index.css'

const FeaturedCard = ({img,bookName,authorName,price,originalPrice,alt}) => {
  return (
    <>
      <div className="CardContainer">
          <div className="CardImg">
              <img src={img} alt={alt} className="custom-img"></img>
          </div>
          <div className="CardContent">
              <h5>{bookName}</h5>
              <p>{authorName}</p>
              <p><span style={{color:'blue'}}>&#8377;{price}</span> &#8377;<span style={{color:'grey', textDecoration:'line-through'}}>{originalPrice}</span></p>
          </div>
      </div>
    </>
  )
}

export default FeaturedCard
