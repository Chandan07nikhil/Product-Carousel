
const image = document.querySelector('.images');
const imgSource = ['images/Iphone.jpg', 'images/Camera - Copy.jpg', 'images/Beauty-Product.jpg', 'images/Cloaths.jpg', 'images/Coke.jpg', 'images/Food.jpg', 'images/Milk.jpg', 'images/Gadgets.jpg'];

let index = 0;

const autoLoad = () => {
    index = index === imgSource.length - 1 ? 0 : index + 1;
    image.src = imgSource[index];
}
const interval = setInterval(autoLoad, 3000);

const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');


const handleLeftClick = () => {
    index = index === 0 ? imgSource.length - 1 : index - 1;
    image.src = imgSource[index];
    clearInterval(interval);
} 

const handleRightClick = () => {
    index = index === imgSource.length - 1 ? 0 : index + 1;
    image.src = imgSource[index];
    clearInterval(interval);
} 

leftArrow.addEventListener('click', handleLeftClick);
rightArrow.addEventListener('click', handleRightClick);