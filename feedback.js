let isiNama = document.querySelector('.isiNama')
let pg1 = document.querySelector('.pg1')
let pg2 = document.querySelector('.pg2')
let pg3 = document.querySelector('.pg3')
let nilai = document.querySelector('.nilai')
let feedback1 = document.querySelector('.feedback1')
let showFeed = document.querySelector('.showFeed')
let btnKirim = document.querySelector('.btnKirim')
let btnShowFeed = document.querySelector('.btnShowFeed')
let komenOrg = document.querySelector('.komenOrg')
let survOrg = document.querySelector('.survOrg')
let showMore = document.querySelector('.showMore')

function af() {
    feedback1.classList.remove('fHide')
    btnKirim.classList.add('bFK')
}

function cencel() {
    let nama = document.getElementById('nama')

    nama.value = "";

    feedback1.classList.add('fHide')
    btnKirim.classList.remove('bFK')
}

function mulai() {
    let nama = document.getElementById('nama')
    let nName = document.getElementById('noName')

    if (nama.value == "") {
        nName.innerText = "*Nama belum diisi";
    } else {
        nName.innerText = "";
        isiNama.classList.add('inHide')
        pg1.classList.remove('pgHide1')
        feedback1.classList.add('change1')
    }
}

function nextpg1l1() {
    feedback1.classList.remove('change1')
    feedback1.classList.add('change2')
    pg1.classList.add('pgHide1')
    pg2.classList.remove('pgHide2')
}

function nextpg1l2() {
    feedback1.classList.remove('change1')
    feedback1.classList.add('change2')
    pg1.classList.add('pgHide1')
    pg2.classList.remove('pgHide2')
}

function nextpg1l3() {
    feedback1.classList.remove('change1')
    feedback1.classList.add('change2')
    pg1.classList.add('pgHide1')
    pg2.classList.remove('pgHide2')
}

function nextpg1l4() {
    feedback1.classList.remove('change1')
    feedback1.classList.add('change2')
    pg1.classList.add('pgHide1')
    pg2.classList.remove('pgHide2')
}

function nextpg2l1() {
    feedback1.classList.remove('change2')
    feedback1.classList.add('change3')
    pg2.classList.add('pgHide2')
    pg3.classList.remove('pgHide3')
}

function nextpg2l2() {
    feedback1.classList.remove('change2')
    feedback1.classList.add('change3')
    pg2.classList.add('pgHide2')
    pg3.classList.remove('pgHide3')
}

function nextpg2l3() {
    feedback1.classList.remove('change2')
    feedback1.classList.add('change3')
    pg2.classList.add('pgHide2')
    pg3.classList.remove('pgHide3')
}

function nextpg2l4() {
    feedback1.classList.remove('change2')
    feedback1.classList.add('change3')
    pg2.classList.add('pgHide2')
    pg3.classList.remove('pgHide3')
}

function nextpg3l1() {
    feedback1.classList.remove('change3')
    feedback1.classList.add('change4')
    pg3.classList.add('pgHide3')
    nilai.classList.remove('nHide')
}

function nextpg3l2() {
    feedback1.classList.remove('change3')
    feedback1.classList.add('change4')
    pg3.classList.add('pgHide3')
    nilai.classList.remove('nHide')
}

function kirim() {
    let nilaiWeb = document.getElementById('nilaiWeb');
    let valueNW = nilaiWeb.value
    let komen = document.getElementById('komen');

    let maxNum = document.getElementById('maxNum')
    let nama = document.getElementById('nama')

    var a = 10
    var b = 1

    if (valueNW > a || valueNW == "" || valueNW < b) {
        maxNum.innerText = "*Masukkan nilai yang benar";
    } else {
        maxNum.innerText = "";
        nama.value = "";
        nilaiWeb.value = "";
        komen.value = "";
        
        feedback1.classList.remove('change4')
        nilai.classList.add('nHide')
        isiNama.classList.remove('inHide')
        feedback1.classList.add('fHide')

        btnKirim.classList.remove('bFK')
    }
}

function sH() {
    showFeed.classList.remove('sFhide')
    btnShowFeed.classList.add('bsf')
}

function csf() {
    btnShowFeed.classList.remove('bsf')
    showFeed.classList.add('sFhide')
}

function showSurv() {
    if (komenOrg.classList.contains('more')) {
        komenOrg.classList.remove('more')
        survOrg.classList.add('hideSurv')
        showMore.innerText = "Lebih banyak";
    } else {
        komenOrg.classList.add('more')
        survOrg.classList.remove('hideSurv')
        showMore.innerText = "Lebih sedikit";
    }
}