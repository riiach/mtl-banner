import React, { useEffect, useState } from 'react'
import CardFace from './CardFace'
import { motion } from "motion/react"

const FlipCard = () => {
    const [faceIndex, setFaceIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const nextFace = () => {
        setFaceIndex((prevIndex) => (prevIndex + 1) % 3);
    };

    useEffect(() => {
        if (isHovered) return; // When hovered, don't automatically flip

        const interval = setInterval(nextFace, 3000);

        return () => clearInterval(interval);
    }, [isHovered]);

    return (
        <motion.div
            className="flex-1 border border-red-500"
            onHoverStart={() => {
                setIsHovered(true);
                nextFace();
            }}
            onHoverEnd={() => {
                setIsHovered(false);
            }}
            animate={{
                rotateY: faceIndex * 180,
            }}
            transition={{ duration: 0.5 }}
        >
            <CardFace data={card.faces[faceIndex]}/>
        </motion.div>
    )
}
export default FlipCard
