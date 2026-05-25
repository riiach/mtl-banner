import React, { useState, useEffect } from 'react'
import FlipCard from './FlipCard'
import { cards, images } from './cards.data'

const CardStack = () => {
    const [activeCard, setActiveCard] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setFaceIndex((prev) => (prev + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-full flex flex-col gap-1 lg:flex-row">
            {cards.map((card) => (
                <FlipCard
                    key={card.id}
                    index={card.index}
                    totalCards={cards.length}
                    images={images}
                    isActive={activeCard === card.index}
                />
            ))}
        </div>
    )
}
export default CardStack
