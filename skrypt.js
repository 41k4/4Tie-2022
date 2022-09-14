var iloscZnakow=8;
var iloscWlonychZnakow=0;
var iloscMaleL=0;
var iloscDuzeL=0;
function ustawWolne(){
    iloscWlonychZnakow=iloscZnakow-iloscDuzeL-iloscMaleL;
    document.getElementById("iloscMaleL").max=iloscWlonychZnakow;
    document.getElementById("iloscDuzeL").max=iloscWlonychZnakow;


}
function wybieranieDuzeL(){
    var iloscDuzeL=document.getElementById("iloscDuzeL").value;
    document.getElementById("wybDuzeL").value=iloscDuzeL;
}
function wybieranieMaleL(){
    var iloscMaleL=document.getElementById("iloscMaleL").value;
    document.getElementById("wybMaleL").value=iloscMaleL;
}