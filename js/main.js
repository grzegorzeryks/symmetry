console.log('elo');

let personalCLick = document.querySelector('.oneonone');
let personalBox = document.querySelector('.personal')
let insideContent = document.querySelector('.inside-content')
console.log(insideContent);
personalCLick.addEventListener('click', showBox);

personalBox.addEventListener('click', hideBox);

function hideBox(){
  personalBox.style.left = '-2000px';
}


function showBox(){
  console.log('works');
  personalBox.style.left = '0';
  personalBox.style.transition = 'all 0.8s';
}

// defend.addEventListener('click', defenseAction);
