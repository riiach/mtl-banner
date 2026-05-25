import React, { useEffect, useState } from 'react'

const FlipCard = () => {
    const [faceIndex, setFaceIndex] = useState(0);

    const nextFace = () => {
        setFaceIndex((prevIndex) => (prevIndex + 1) % 3);
    };

    return (
        <div className="flex-1 border border-red-500">

        </div>
    )
}
export default FlipCard
