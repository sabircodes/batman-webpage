function myfun(){
    var h = document.querySelector("#home");
    h.style.backgroundImage="url(b1.jpg)";
}
function myfun2(){
    var h2 = document.querySelector("#home");
    h2.style.backgroundImage="url('bw.jpg')";
}


var b = document.querySelectorAll(".btn");
for(let i =0 ; i < b.length ; i++){
    b[i].addEventListener("click",function(event){
       var audio = new Audio("soun1.mp3");
       audio.play();
        
    });

    

}