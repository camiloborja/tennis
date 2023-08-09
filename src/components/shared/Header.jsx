import React from 'react'
import './styles/Header.css'
const Header = () => {
    return (
        <>
            <div className='headerMainBox'>
                <div className="topbarMain">
                    <div className="topbarText">
                        <span>ACTUALIZA TUS DATOS Y RECIBE 20% OFF AQUÍ</span>
                    </div>
                    <div className="topbarRoutes">
                        <a href="">¡NECESITAS AYUDA?</a>

                        <a href="">INICIAR SESIÓN </a>
                    </div>
                </div>
                <div className="headerMain">
                    <div className="headerSearch">
                        <div className="locationStores">
                            <span>TIENDAS</span>
                        </div>
                        <div className="headerLogo">
                            <img src="https://tennis.vtexassets.com/assets/vtex.file-manager-graphql/images/ec1508cb-2bf8-4dbe-8211-33e33fa6444d___aa29dd82c7e8875995264021213ec236.svg" alt="logo" />
                        </div>
                        <div className="searchIcons">
                            <input type="search" placeholder='Busca tus favoritos' />
                        </div>
                    </div>
                    <div className="headerMenu">
                        <a href="">Nuevo</a>
                        <a href="">Mujer</a>
                        <a href="">Hombre</a>
                        <a href="">Kids</a>
                        <a href="">Unisex</a>
                        <a href="">Mascotas</a>
                        <a href="">Sale</a>
                        <a href="">Blog</a>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Header