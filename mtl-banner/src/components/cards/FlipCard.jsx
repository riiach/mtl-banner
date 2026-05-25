import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CardFace from "./CardFace";

const FlipCard = ({ index, totalCards, images, isActive }) => {
    const [faceIndex, setFaceIndex] = useState(0);
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        if (!isActive) return;

        setRotation(180);

        const timer = setTimeout(() => {
            setFaceIndex((prev) => (prev + 1) % images.length);
            setRotation(0);
        }, 225);

        return () => clearTimeout(timer);
    }, [isActive, images.length]);

    return (
        <motion.div
            className="flex-1 overflow-hidden border border-red-500"
            animate={{
                rotateY: rotation,
            }}
            transition={{
                duration: 0.45,
                ease: "easeInOut",
            }}
        >
            <CardFace
                image={images[faceIndex]}
                index={index}
                totalCards={totalCards}
            />
        </motion.div>
    );
};

export default FlipCard;