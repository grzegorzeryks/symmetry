console.log('elo');

let personalCLick = document.querySelector('.oneonone');
let onlineClick = document.querySelector('.online');
let personalBox = document.querySelector('.personal');
let onlineBox =document.querySelector('.personal2');
let insideContent = document.querySelector('.inside-content');
console.log(insideContent);

let currentBox = personalBox;
console.log(currentBox);

personalCLick.addEventListener('click', function(){
  currentBox = personalBox;
showBox();
});
onlineClick.addEventListener('click', function(){
  console.log('online dziala');
    currentBox = onlineBox;
      showBox();
});


function hideBox(){
  currentBox.style.left = '-2000px';
}




function showBox(){
  console.log('works');
  currentBox.style.left = '0';
  currentBox.style.transition = 'all 0.8s';
  currentBox.addEventListener('click', hideBox);
}

// defend.addEventListener('click', defenseAction);
