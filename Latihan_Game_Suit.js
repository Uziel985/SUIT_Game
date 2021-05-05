const nilaiPemain = document.querySelector('.skor-play');
const nilaiKomputer = document.querySelector('.skor-com');
const status = document.querySelector('.info');
let reset = document.querySelector('.reset');

let wins = 1;
let loses = 1;

function getComp(){
    const computer = Math.round(Math.random() * 9 + 1);
    if (computer <= 3) return 'gajah';
    if (computer >= 6) return 'orang';
    return 'semut';
}

function getHasil(comp, player){

    // if (player == comp) return 'SERI';
    // if (player == 'gajah') return (comp == 'orang') ? 'MENANG' : 'KALAH';
    // if (player == 'orang')  return (comp == 'gajah') ? 'KALAH' : 'MENANG';
    // if (player == 'semut') return (comp == 'orang') ? 'KALAH' : 'MENANG';



    if (player === comp) {
       return 'SERI'
    } else if (player == 'gajah'){
        if (comp =="orang") {
            nilaiPemain.innerHTML = wins++;
            status.innerHTML = 'MENANG';
        } else {
            nilaiKomputer.innerHTML = loses++;
            status.innerHTML = 'KALAH!!!';
        }
    } else if (player == 'orang') {
        if (comp == 'gajah') {
            nilaiPemain.innerHTML = wins++;
            status.innerHTML = 'MENANG';
        } else {
            nilaiKomputer.innerHTML = loses++;
            status.innerHTML = 'KALAH!!!';
        }
    } else if (player == 'semut') {
        if (comp == 'gajah') {
            nilaiPemain.innerHTML = wins++;
            status.innerHTML = 'MENANG';
        } else {
            nilaiKomputer.innerHTML = loses++;
            status.innerHTML = 'KALAH!!!';
        }
    }
    console.log(player, comp)
}


// const pilihan = document.querySelectorAll('li img')
// pilihan.forEach(function(a){
//     console.log(a)
// })


const pGajah = document.querySelector('.gajah')
pGajah.addEventListener('click', function(){
    const pilihanComp = getComp();
    const player = pGajah.className;
    const hasil = getHasil(pilihanComp, player);
    const imgCom = document.querySelector('.img-computer');
    imgCom.setAttribute('src', 'img/' + pilihanComp + '.png');
    // const info = document.querySelector('.info');
    // info.innerHTML = hasil;
    // console.log('player : ' + player);
    // console.log('comp : ' + pilihanComp);
    // console.log(hasil);
});

const pOrang = document.querySelector('.orang')
pOrang.addEventListener('click', function(){
    const pilihanComp = getComp();
    const player = pOrang.className;
    const hasil = getHasil(pilihanComp, player);
    const imgCom = document.querySelector('.img-computer');
    imgCom.setAttribute('src', 'img/' + pilihanComp + '.png');
    // const info = document.querySelector('.info');
    // info.innerHTML = hasil;
    // console.log('player : ' + player);
    // console.log('comp : ' + pilihanComp);
    // console.log(hasil);
});

const pSemut = document.querySelector('.semut')
pSemut.addEventListener('click', function(){
    const pilihanComp = getComp();
    const player = pSemut.className;
    const hasil = getHasil(pilihanComp, player);
    const imgCom = document.querySelector('.img-computer');
    imgCom.setAttribute('src', 'img/' + pilihanComp + '.png');
    // const info = document.querySelector('.info');
    // info.innerHTML = hasil;
    // console.log('player : ' + player);
    // console.log('comp : ' + pilihanComp);
    // console.log(hasil);
});

reset.addEventListener("click",function(){
	loses = 0;
	wins = 0;
	document.querySelector('.skor-play').innerHTML=wins;
	document.querySelector('.skor-com').innerHTML=loses;
});