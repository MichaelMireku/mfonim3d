export const paintingData = [
  // Front Wall
  ...Array.from({ length: 4 }, (_, i) => ({
    // Array.from creates an array from an array-like object. The first parameter is the array-like object. The second parameter is a map function that is called for each element in the array-like object. The map function takes two parameters: the element and the index. The map function returns the value that will be added to the new array. In this case, we are returning an object with the painting data. `_` is a placeholder for the element. We don't need it because we are not using the element. `i` is the index. We use it to set the painting number.
    imgSrc: `artworks/${i + 1}.jpg`, // `i + 1` is the painting number. We add 1 to the index because the index starts at 0 but we want the painting numbers to start at 1.
    width: 8, // width of the painting
    height: 7, // height of the painting
    position: { x: -15 + 10 * i, y: 4, z: -19.5 }, // position of the painting
    rotationY: 0, // rotation of the painting
    info: {
      
    },
    
  })),
  // Back Wall
  ...Array.from({ length: 4 }, (_, i) => ({
    imgSrc: `artworks/${i + 8}.jpg`,
    width: 8,
    height: 6,
    position: { x: -15 + 10 * i, y: 4, z: 19.5 },
    rotationY: Math.PI,
    info: {
      
    },
    
  })),
  // Left Wall
  ...Array.from({ length: 4 }, (_, i) => ({
    imgSrc: `artworks/${i + 12}.jpg`,
    width: 6,
    height: 6,
    position: { x: -19.5, y: 4, z: -15 + 10 * i },
    rotationY: Math.PI / 2,
    info: {
      
    },
    
  })),
  // Right Wall
  ...Array.from({ length: 4 }, (_, i) => ({
    imgSrc: `artworks/${i + 16}.jpg`,
    width: 7,
    height: 5,
    position: { x: 19.5, y: 4, z: -15 + 10 * i },
    rotationY: -Math.PI / 2,
    info: {
      
    },
  })),
];
