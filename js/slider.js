const images = [
    'images/pic1.jpg',
     'images/pic2.jpg',
    'images/pic3.jpg',
    'images/pic4.jpg'
];
let imgIndex = 0;
const imgElement=document.getElementById('slider-img');
setInterval(() => {
    if (imgIndex >=  images.length) {
        imgIndex =0;
    }
    const imgUrl = images[imgIndex];
    console.log(imgUrl)
    imgElement.setAttribute('src', imgUrl);
    imgIndex++;
},1000)