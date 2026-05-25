import { useEffect, useState } from "react";
import FlipCard from "./FlipCard";
import { cards, images } from "./cards.data";

const FLIP_SPEED = 250;
const SET_DELAY = 1500;

const CardStack = () => {
    const [activeCardIndex, setActiveCardIndex] = useState(-1);
    const [targetFaceIndex, setTargetFaceIndex] = useState(0);

    useEffect(() => {
        const delay = activeCardIndex === -1 ? SET_DELAY : FLIP_SPEED;

        const timer = setTimeout(() => {
            setActiveCardIndex((prev) => {
                if (prev === -1) return 0;

                if (prev >= cards.length - 1) return -1;

                return prev + 1;
            });
        }, delay);

        return () => clearTimeout(timer);
    }, [activeCardIndex]);

    return (
        <div className="w-full h-full flex flex-col gap-[2px] lg:flex-row
         border-[#d9dde3] border-20
         bg-[linear-gradient(135deg,#2b2b2b_0%,#111_35%,#3a3a3a_50%,#111_70%,#2b2b2b_100%)]
         px-4
         shadow-[inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.8),0_20px_60px_rgba(0,0,0,0.5)]
         ">
            {cards.map((card) => (
                <FlipCard
                    key={card.id}
                    index={card.index}
                    totalCards={cards.length}
                    images={images}
                    isActive={card.index === activeCardIndex}
                    targetFaceIndex={targetFaceIndex}
                    setTargetFaceIndex={setTargetFaceIndex}
                />
            ))}
        </div>
    );
};

export default CardStack;