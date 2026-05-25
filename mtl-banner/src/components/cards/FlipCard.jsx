import React from 'react'
import CardFace from './CardFace'
import { motion } from "framer-motion";

const FlipCard = ( { index, totalCards, images, faceIndex }) => {
    return (
        <motion.div
            className="flex-1 overflow-hidden border border-red-500"
            animate={{ rotateY: faceIndex * 180 }}
            transition={{
                duration: 0.5,
                delay: index * 0.04,
                ease: "easeInOut",
            }}
        >
            <CardFace
                image={images[faceIndex]}
                index={index}
                totalCards={totalCards}
            />
        </motion.div>
    )
}
export default FlipCard
