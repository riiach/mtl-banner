import React from 'react'
import FlipCard from './FlipCard'
import { cards } from './cards.data'

const CardStack = () => {
    return (
        <div className="w-full h-full flex flex-col gap-1 lg:flex-row">
            {cards.map((card) => (
                <FlipCard
                    key={card.id}
                    card={card}
                />
            ))}
        </div>
    )
}
export default CardStack
