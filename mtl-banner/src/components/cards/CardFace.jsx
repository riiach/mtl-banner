import React from 'react'

const CardFace = ( {image, index, cardWidth, totalCards }) => {
    const positionX = -(index * cardWidth); // Calculate the position based on the index
    return (
        <div className="w-full h-full bg-cover bg-no-repeat"
             style={{
                 backgroundImage: `url(${image})`,
                 backgroundPosition: `${positionX}px center`,
                 backgroundSize: `${cardWidth * totalCards}px 100%`,
             }}
        />
    )
}
export default CardFace
