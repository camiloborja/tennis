import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

const Carrousel = () => {
    return (
        <div>
            <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
                <div>
                    <img src="https://tennis.vtexassets.com/assets/vtex.file-manager-graphql/images/067ca808-0777-4045-af66-e750790f2581___a11dce4941b4974494170f5c7a6a3629.jpg" 
                    srcSet={`${"https://tennis.vtexassets.com/assets/vtex.file-manager-graphql/images/3eed79c6-4bd3-4b87-86f0-ac2bfbfdfffe___a893203f67b0c590f19e41725e80270b.jpg"} 320w, ${"https://tennis.vtexassets.com/assets/vtex.file-manager-graphql/images/067ca808-0777-4045-af66-e750790f2581___a11dce4941b4974494170f5c7a6a3629.jpg"}   960w`}/>

                </div>
                <div>
                    <img src="https://tennis.vtexassets.com/assets/vtex.file-manager-graphql/images/6acf412e-f3a6-45a1-9204-f3c4a804c89c___0470d35360a6ffc892ae8dd1008ad3dc.jpg" />

                </div>
                <div>
                    <img src="https://tennis.vtexassets.com/assets/vtex.file-manager-graphql/images/84f5858c-b80e-42ae-84b4-a64fa3194b77___6db5e7cfeb6f10854441de1f0ba2fa19.png" />

                </div>
            </Carousel>
        </div>
    )
}

export default Carrousel