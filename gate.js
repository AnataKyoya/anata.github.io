let dayNight = document.querySelector('.dayNight')
let body = document.querySelector('body')

let koleksi = document.querySelector('.koleksi')
let profil = document.querySelector('.profil')


dayNight.onclick = function () {
    dayNight.classList.toggle('active')
    body.classList.toggle('dark')
}

koleksi.onclick = function () {
    let close = document.querySelector('.cgkoleksi')
    let ck = document.getElementById('ck').innerHTML;
    
    const ok = document.getElementById('cG');
    if (ok.className == 'cgkoleksi'){
        close.classList.remove('cgkoleksi')
        ok.innerHTML = "";
    } else {
    	ok.classList.remove('cgprofil')
    	ok.classList.add('cgkoleksi')
        ok.innerHTML = ck;
    }
}

profil.onclick = function () {
    let close = document.querySelector('.cgprofil')
    let cp = document.getElementById('cp').innerHTML;
    
    const ok = document.getElementById('cG');
    if (ok.className == 'cgprofil'){
        close.classList.remove('cgprofil')
        ok.innerHTML = "";
    } else {
    	ok.classList.remove('cgkoleksi')
    	ok.classList.add('cgprofil')
        ok.innerHTML = cp;
    }
}
