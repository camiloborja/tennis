import React from 'react'
import './styles/ComonStyles.css'

const BannerPromotion = () => {
    return (
        <div>
            <div className="bannerPromotionBox">
                <div className="promotionText">
                    <h3>¡Cyber Tennis!</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptatibus facere culpa et error sint quia rem assumenda. Voluptatem et possimus porro nisi aspernatur magnam excepturi eius quos eum iure?</p>
                    <a href="">
                        <button className='btn-home'>
                            <span></span><span></span><span></span><span></span>
                            Compra hombre
                        </button>
                    </a>
                    <a href="">
                        <button className='btn-home'>
                            <span></span><span></span><span></span><span></span>
                            Compra mujer
                        </button></a>
                </div>
                
                
            </div>
        </div>
    )
}

export default BannerPromotion