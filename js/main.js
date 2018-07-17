console.log('elo');

let personalCLick = document.querySelector('.oneonone');
let personalBox = document.querySelector('.personal')

console.log(personalBox);
personalCLick.addEventListener('click', function(){
console.log('works');
personalBox.style.left = '0';
personalBox.style.transition = 'all 0.8s';
});

// defend.addEventListener('click', defenseAction);
