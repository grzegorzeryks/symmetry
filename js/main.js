let personalCLick = document.querySelector('.oneonone');
let onlineClick = document.querySelector('.online');
let personalBox = document.querySelector('.personal');
let onlineBox = document.querySelector('.personal2');
let insideContent = document.querySelector('.inside-content');
let hybridClick = document.querySelector('.hybrid')
let hybridBox = document.querySelector('.personal3');
console.log(insideContent);

let currentBox = personalBox;

personalCLick.addEventListener('click', function() {
  currentBox = personalBox;
  showBox();
});

onlineClick.addEventListener('click', function() {
  currentBox = onlineBox;
  showBox();
});

hybridClick.addEventListener('click', function() {
  currentBox = hybridBox;
  showBox();
});


function hideBox() {
  currentBox.style.left = '-2000px';
}



function showBox() {
  console.log('works');
  currentBox.style.left = '0';
  currentBox.style.transition = 'all 0.8s';
  currentBox.addEventListener('click', hideBox);
}

// gallery popup
let galleryClick = document.querySelector('.gallery-click');
let gallerySection = document.querySelector('.gallery');

galleryClick.addEventListener('click', function() {
  gallerySection.style.visibility = 'visible';
  gallerySection.style.width = '80%';
  gallerySection.style.height = '80%';
});

//closing gallery popup
let closeGalleryButton = document.querySelector('.gallery-close');
console.log(closeGalleryButton);
closeGalleryButton.addEventListener('click', function() {
  gallerySection.style.visibility = 'hidden';
  gallerySection.style.width = '10%';
  gallerySection.style.height = '10%';

});

//popup pictures
let picturesArray = document.querySelectorAll('.gallery-container div');
let galleryPicture = document.querySelector('.gallery-picture');



for (var i = 0; i < picturesArray.length; i++) {
     let elem = picturesArray[i];
          console.log(picturesArray[i]);
  picturesArray[i].addEventListener('click', function(e) {
     console.log(elem);
     let elemStyle = window.getComputedStyle(elem, null).getPropertyValue("background-image");
     console.log(elemStyle);
    galleryPicture.style.marginLeft = '0px';
    galleryPicture.style.backgroundImage = elemStyle;
    galleryPicture.addEventListener('click', function() {

      galleryPicture.style.marginLeft = '-2000px';
    })
  });
}
