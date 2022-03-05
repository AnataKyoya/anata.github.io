let isiNama = document.querySelector('.isiNama')
let nilai = document.querySelector('.nilai')
let sendFeedback = document.querySelector('.send-feedback')
let showFeed = document.querySelector('.show-feed')
let send1 = document.querySelector('.send')
let show1 = document.querySelector('.show')
let komenOrg = document.querySelector('.komenOrg')
let survOrg = document.querySelector('.survOrg')
let showMore = document.querySelector('.showMore')

function send() {
    sendFeedback.classList.remove('hide')
    send1.classList.add('op1')
}

function cencel() {
    let nama = document.getElementById('nama')
    let nilai = document.getElementById('nilai')
    let komentar = document.getElementById('komentar')

    nama.value = "";
    nilai.value = "";
    komentar.value = "";

    sendFeedback.classList.add('hide')
    send1.classList.remove('op1')
}

function kirim() {
    sendFeedback.classList.add('hide')
    send1.classList.remove('op1')
}

function show() {
    showFeed.classList.remove('hide')
    show1.classList.add('op1')
}

function closefeed() {
    showFeed.classList.add('hide')
    show1.classList.remove('op1')
}