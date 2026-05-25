import { useEffect, useState } from "react";
import FlipCard from "./FlipCard";
import { cards, images } from "./cards.data";

const FLIP_SPEED = 250;
const SET_DELAY = 2500;

const CardStack = () => {
    const [activeCardIndex, setActiveCardIndex] = useState(-1);

    useEffect(() => {
        const delay =
            activeCardIndex === -1 ? SET_DELAY : FLIP_SPEED;

        const timer = setTimeout(() => {
            setActiveCardIndex((prev) => {
                if (prev === -1) return 0;

                if (prev >= cards.length - 1) {
                    return -1;
                }

                return prev + 1;
            });
        }, delay);

        return () => clearTimeout(timer);
    }, [activeCardIndex]);

    return (
        <div className="w-full h-full flex flex-col gap-1 lg:flex-row">
            {cards.map((card) => (
                <FlipCard
                    key={card.id}
                    index={card.index}
                    totalCards={cards.length}
                    images={images}
                    isActive={card.index === activeCardIndex}
                />
            ))}
        </div>
    );
};

export default CardStack;