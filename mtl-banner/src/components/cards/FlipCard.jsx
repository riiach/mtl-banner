import React, { useEffect, useState } from 'react'

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
        <div className="flex-1 border border-red-500">

        </div>
    )
}
export default FlipCard
