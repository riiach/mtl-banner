const CardFace = ({ image, index, totalCards }) => {
    return (
        <div
            className="w-full h-full bg-no-repeat"
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: `${totalCards * 100}% 100%`,
                backgroundPosition: `${(index / (totalCards - 1)) * 100}% center`,
            }}
        />
    );
};

export default CardFace;