let dayNight = document.querySelector('.dayNight')
let home = document.querySelector('.home')
let collection = document.querySelector('.collection')
let socialMedia = document.querySelector('.socialMedia')
let feedback = document.querySelector('.feedback')
let profile = document.querySelector('.profile')
let contentGate = document.querySelector('.contentGate')
let profile1 = document.querySelector('.profile1')
let socialMedia1 = document.querySelector('.socialMedia1')
let collection1 = document.querySelector('.collection1')
let body = document.querySelector('body')

let p1 = document.getElementById("p1").innerHTML;

dayNight.onclick = function () {
    dayNight.classList.toggle('active')
    body.classList.toggle('dark')
}

profile.onclick = function () {
    let close = document.querySelector('.profile1')
    let cp2 = document.getElementById('cp2').innerHTML;
    
    const ok = document.getElementById('cG');
    if (ok.className == 'profile1'){
        close.classList.remove('profile1')
        ok.innerHTML = "";
    } else {
    	ok.classList.add('profile1')
    	ok.classList.remove('feedback1')
    	ok.classList.remove('collection1')
        ok.innerHTML = cp2;
    }
}

collection.onclick = function () {
    let close = document.querySelector('.collection1')
    let cc2 = document.getElementById('cc2').innerHTML;
    
    const ok = document.getElementById('cG');
    if (ok.className == 'collection1'){
        close.classList.remove('collection1')
        ok.innerHTML = "";
    } else {
    	ok.classList.remove('profile1')
    	ok.classList.remove('feedback1')
    	ok.classList.add('collection1')
        ok.innerHTML = cc2;
    }
}
