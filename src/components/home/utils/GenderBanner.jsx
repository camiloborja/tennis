import React from 'react'
import './styles/ComonStyles.css'

const GenderBanner = () => {
    return (
        <div>
            <div className="genderBannerBox">
                <div className="genderCard">
                    <img src="https://tennis.vtexassets.com/assets/vtex.file-manager-graphql/images/f4f15bea-be9e-40de-b277-2a286b467b64___a5affc6d33c8b67af427650955ec4ba6.jpeg" alt="" />
                    <div className='textGender'>
                        <a href="">
                            <button className='btn-home'>
                                <span></span><span></span><span></span><span></span>
                                Compra mujer
                            </button></a>
                    </div>
                </div>
                <div className="genderCard">
                    <img src="https://tennis.vtexassets.com/assets/vtex.file-manager-graphql/images/f4f15bea-be9e-40de-b277-2a286b467b64___a5affc6d33c8b67af427650955ec4ba6.jpeg" alt="" />
                    <div className='textGender'>
                        <a href="">
                            <button className='btn-home'>
                                <span></span><span></span><span></span><span></span>
                                Compra hombre
                            </button></a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default GenderBanner