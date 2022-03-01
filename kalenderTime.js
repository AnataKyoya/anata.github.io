setInterval(() => {
    let date = new Date(),
        hour = date.getHours(),
        min = date.getMinutes();
    console.log(hour),
        console.log(min);
    
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;

    document.querySelector(".hour-num").innerText = hour,
        document.querySelector(".hour-min").innerText = min;
    
}, 1000);

let date = new Date();
let day = new Array(7);
day[0] = "minggu.";
day[1] = "senin.";
day[2] = "selasa.";
day[3] = "rabu.";
day[4] = "kamis.";
day[5] = "jum'at.";
day[6] = "sabtu.";
document.querySelector(".day-hari").innerText = day[date.getDay()];

hari = date.getDate();
hari = hari < 10 ? "0" + hari : hari;
document.querySelector(".tanggal-hari").innerText = hari;

let bulan = new Array(12);
bulan[0] = "01";
bulan[1] = "02";
bulan[2] = "03";
bulan[3] = "04";
bulan[4] = "05";
bulan[5] = "06";
bulan[6] = "07";
bulan[7] = "08";
bulan[8] = "09";
bulan[9] = "10";
bulan[10] = "11";
bulan[11] = "12";
document.querySelector(".tanggal-bulan").innerText = bulan[date.getMonth()];

tahun = date.getFullYear();
document.querySelector(".tanggal-tahun").innerText = tahun;