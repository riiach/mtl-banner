import React from 'react'

const CardFace = ( {image, index, totalCards }) => {
    const positionX = -(index * cardWidth); // Calculate the position based on the index
    return (
        <div className="w-full h-full bg-cover bg-no-repeat"
             style={{
                 backgroundImage: `url(${image})`,
                 backgroundSize: `${totalCards * 100}% 100%`,
                 backgroundPosition: `${(index / (totalCards - 1)) * 100}% center`,
             }}
        />
    )
}
export default CardFace
