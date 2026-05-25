export const images = [
    "/CardFace1.png",
    "/CardFace2.png",
    "/CardFace3.png",
];

export const cards = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    i,
}))