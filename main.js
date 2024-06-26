const img = [
  'img/bau.png',
  'img/cua.png',
  'img/tom.png',
  'img/ca.png',
  'img/ga.png',
  'img/huou.png'

]


const showRandomImages = () => {
  const imageContainer = document.getElementById('image-container');
  const randomImages = []; 


  while (imageContainer.firstChild) {
      imageContainer.removeChild(imageContainer.firstChild);
  }

  const rollInterval = setInterval(() => {
      
      while (imageContainer.firstChild) {
          imageContainer.removeChild(imageContainer.firstChild);
      }

      const rollingImages = new Set();
      while (rollingImages.size < 3)
      {
          const randomImage = Math.floor(Math.random() * img.length);
          rollingImages.add(randomImage);
      }

      for (const randomImage of rollingImages) {
          const image = document.createElement('div');
          image.classList.add('image');
          const imgElement = document.createElement('img');
          imgElement.src = img[randomImage];
          image.appendChild(imgElement);
          imageContainer.appendChild(image);
      }
  }, 100); 

  setTimeout(() => {
    clearInterval(rollInterval);
  },2000);
}
showRandomImages();





const images = document.querySelectorAll('.select img');
let totalClicks = 0;
const MAX_CLICKS = 3;
let resetButton = document.getElementById('reset')


for (let image of images) {
  const imageId = image.id;
  const countSpan = document.getElementById(`count-${imageId}`);

  image.addEventListener('click', function() {
    if (totalClicks < MAX_CLICKS) {
      totalClicks++;
      countSpan.textContent = parseInt(countSpan.textContent) + 1;
    } 
  });
}
resetButton.addEventListener('click', function(){
    totalClicks = 0;
    for (let image of images) {
        const imageId = image.id;
        const countSpan = document.getElementById(`count-${imageId}`);
        countSpan.textContent = totalClicks;
  }
})
