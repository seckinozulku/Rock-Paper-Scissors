/* Seçim İşlemleri */

const oyuncu_skor = document.getElementsByClassName("oyuncu_skor")[0];
const bilgisayar_skor = document.getElementsByClassName("bilgisayar_skor")[0];

const tas = document.getElementById("tas");
const kagit = document.getElementById("kagit");
const makas = document.getElementById("makas");

const oyuncu_secimi = document.getElementById("oyuncu_secimi");
const bilgisayar_secimi = document.getElementById("bilgisayar_secimi");
const mesaj = document.getElementsByClassName("mesaj")[0];


let oyuncu = 0;
let bilgisayar = 0;

function bilgisayarSecim(){
    const secim = ["tas","kagit","makas"];
    const rastgeleSayi = Math.floor(Math.random()*3);
    //console.log(rastgeleSayi);
    bilgisayar_secimi.setAttribute("src",`res/${secim[rastgeleSayi]}.png`);
    return secim [rastgeleSayi];
}
// bilgisayarSecim();

function eventListeners () {
    tas.addEventListener("click",function(){
        //console.log(eventListeners);
        oyuncu_secimi.setAttribute("src",`res/tas.png`);
        let bil_secim = bilgisayarSecim();
        sonuc ("tas",bil_secim); //tasmakas taskagit
        
    });

    kagit.addEventListener("click",function(){
        //console.log(eventListeners);
        oyuncu_secimi.setAttribute("src",`res/kagit.png`);
        let bil_secim = bilgisayarSecim();
        sonuc ("kagit",bil_secim);
    });

    makas.addEventListener("click",function(){
        //console.log(eventListeners);
        oyuncu_secimi.setAttribute("src",`res/makas.png`);
        let bil_secim = bilgisayarSecim();
        sonuc ("makas",bil_secim);
    });
}
eventListeners();
   /* SONUÇ OLAYI */
    function sonuc (oyuncu,bilgisayar) {
        switch(oyuncu+bilgisayar){
            case "tasmakas":
            case "kagittas":
            case "makaskagit":
                kazan();
            break;
            case "taskagit":
            case "kagitmakas":
            case "makastas":
                kaybet();
            break;
            case "tastas":
            case "kagitkagit":
            case "makasmakas":
                berabere();
            break;
            default:"HATA";
            break;

        }
    } 
       /* SONUÇ OLAYI */

function kazan() {
    oyuncu = oyuncu + 1;
    mesaj.innerHTML = "Tebrikler KAZANDIN :)";
    oyuncu_skor.innerHTML = oyuncu.toString();

}

function kaybet() {
    bilgisayar = bilgisayar + 1;
    mesaj.innerHTML = "Maalesef KAYBETTİN ):";
    bilgisayar_skor.innerHTML = bilgisayar.toString();
    console.log("bilgisayar:",bilgisayar);
}

function berabere() {
    
    mesaj.innerHTML = "Tüühh..Berabere..";
    

}