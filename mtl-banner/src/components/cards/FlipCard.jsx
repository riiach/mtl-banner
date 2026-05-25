import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CardFace from "./CardFace";

const FLIP_DURATION = 450;

const FlipCard = ({
                      index,
                      totalCards,
                      images = [],
                      isActive,
                      targetFaceIndex,
                      setTargetFaceIndex,
                  }) => {

    const [faceIndex, setFaceIndex] = useState(0);
    const [rotation, setRotation] = useState(0);
    const [hasHovered, setHasHovered] = useState(false);

    // Flip animation helper
    const flipToFace = (
        nextFaceIndex,
        direction = "forward"
    ) => {

        const rotateValue =
            direction === "forward"
                ? 180
                : -180;

        // Start rotation
        setRotation(rotateValue);

        // Halfway through flip:
        // change image + reset rotation
        setTimeout(() => {
            setFaceIndex(nextFaceIndex);
            setRotation(0);
        }, FLIP_DURATION / 2);
    };

    // Automatic sequential flip
    useEffect(() => {

        if (!isActive) return;
        if (!images.length) return;

        // First card defines target state
        if (index === 0) {

            const nextFace =
                (faceIndex + 1) % images.length;

            setTargetFaceIndex(nextFace);

            flipToFace(nextFace, "forward");

            return;
        }

        // All other cards follow first card state
        flipToFace(targetFaceIndex, "forward");

    }, [isActive]);

    // Hover reverse flip
    const handleHoverStart = () => {

        if (hasHovered) return;
        if (!images.length) return;

        setHasHovered(true);

        const prevFace =
            (faceIndex - 1 + images.length)
            % images.length;

        flipToFace(prevFace, "backward");
    };

    const handleHoverEnd = () => {
        setHasHovered(false);
    };

    if (!images.length) return null;

    return (
        <motion.div
            className="flex-1 overflow-hidden"

            onMouseEnter={handleHoverStart}
            onMouseLeave={handleHoverEnd}

            animate={{
                rotateY: `${rotation}deg`,
            }}

            transition={{
                duration: FLIP_DURATION / 1000,
                ease: "easeInOut",
            }}

            style={{
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
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