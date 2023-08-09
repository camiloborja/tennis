import React from 'react'
import './styles/ComonStyles.css'

const SliderProducts = ({tittle}) => {
  return (
    <div className='sliderHomeMain'>
        <div>
            <div className="sliderTitle">
                <h3>{tittle}</h3>
                <a href="">VER TODO</a>
            </div>
            <div className="sliderCardsBox">
                <div className="sliderCard">
                    <img src="https://tennis.vtexassets.com/arquivos/ids/2261915-500-auto?v=1777940907&width=500&height=auto&aspect=true" alt="" />
                    <span className='sliderCardName'>Vestido midi estampado para mujer</span>
                    <span className='sliderCardListPrice'>149.900</span>
                    <span className='sliderCardDiscountPrice'>74.900</span>
                </div>
                <div className="sliderCard">
                    <img src="https://tennis.vtexassets.com/arquivos/ids/2261915-500-auto?v=1777940907&width=500&height=auto&aspect=true" alt="" />
                    <span className='sliderCardName'>Vestido midi estampado para mujer</span>
                    <span className='sliderCardListPrice'>149.900</span>
                    <span className='sliderCardDiscountPrice'>74.900</span>
                </div>
                <div className="sliderCard">
                    <img src="https://tennis.vtexassets.com/arquivos/ids/2261915-500-auto?v=1777940907&width=500&height=auto&aspect=true" alt="" />
                    <span className='sliderCardName'>Vestido midi estampado para mujer</span>
                    <span className='sliderCardListPrice'>149.900</span>
                    <span className='sliderCardDiscountPrice'>74.900</span>
                </div>
                <div className="sliderCard">
                    <img src="https://tennis.vtexassets.com/arquivos/ids/2261915-500-auto?v=1777940907&width=500&height=auto&aspect=true" alt="" />
                    <span className='sliderCardName'>Vestido midi estampado para mujer</span>
                    <span className='sliderCardListPrice'>149.900</span>
                    <span className='sliderCardDiscountPrice'>74.900</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SliderProducts