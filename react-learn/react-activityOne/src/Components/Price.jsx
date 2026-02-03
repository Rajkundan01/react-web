import React from 'react'

const Price = ({newPrice,oldPrice}) => {
  return (
    <>
    <div className='PriceStyle'>       
    <span className='OldPriceText'>{oldPrice}</span>
    &nbsp;&nbsp;&nbsp;
    <span className='NewPriceText'>{newPrice}</span>
    </div>
    </>
  )
}

export default Price